package com.yeargun.auth.postrecommendation;


import com.yeargun.auth.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth/PostRecom")
@RequiredArgsConstructor
public class PostRecommendationController {

    private final PostRecommendationService service;


    @PostMapping("/recommended")
    public ResponseEntity<PostRecommendationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        //send stuff to backend & populate it
        return null;
    }


}
