package com.yeargun.auth.postrecommendation;

import com.yeargun.auth.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PostRecommendationService {

    private final PostRepository repository;

    public PostRecommendationResponse register(RegisterRequest request) {

        return PostRecommendationResponse.builder()
                .token(jwtToken)
                .build();

    }

}
