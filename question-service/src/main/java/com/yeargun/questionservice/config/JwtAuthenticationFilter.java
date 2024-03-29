package com.yeargun.questionservice.config;

import com.yeargun.questionservice.token.TokenRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Optional;
import java.util.stream.Stream;

import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final TokenRepository tokenRepository;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        final String jwt;
        final String username;

//        final String bearerToken = request.getHeader("authorization");
//
//        if(bearerToken==null || !bearerToken.startsWith("Bearer")){
//            filterChain.doFilter(request, response);
//            return;
//        }
        final String bearerToken;
        final Cookie[] cookies = request.getCookies();
        if(cookies==null || cookies.length==0){
            filterChain.doFilter(request, response);
            return;
        }

        Optional<Cookie> authorizationCookie = Stream.of(request.getCookies())
                .filter(c -> c.getName().equals("Authorization"))
                .findFirst();

        if(authorizationCookie.isPresent()){
            bearerToken = String.valueOf(authorizationCookie.get().getValue());
            if(bearerToken == null || !bearerToken.startsWith("Bearer%20")){
                filterChain.doFilter(request,response);
                return;
            }
        }
        else{
            filterChain.doFilter(request, response);
            return;
        }
        jwt = bearerToken.substring(9);
        username = jwtService.extractUsername(jwt);
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            var isTokenValid = tokenRepository.findByToken(jwt)
                    .map(t -> !t.isExpired() && !t.isRevoked())
                    .orElse(false);
            if (jwtService.isTokenValid(jwt, userDetails) && isTokenValid) {
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities()
                );
                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}