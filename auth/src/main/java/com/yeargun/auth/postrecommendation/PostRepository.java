package com.yeargun.auth.postrecommendation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Integer> {

    List<Post> findAllByGuts(String gutString);
}
