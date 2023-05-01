package com.yeargun.questionservice.entity;

import com.yeargun.questionservice.auth.Role;
import com.yeargun.questionservice.token.Token;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAnswers  {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer userId;

    private String username;
    private String email;
    private String password;


}
