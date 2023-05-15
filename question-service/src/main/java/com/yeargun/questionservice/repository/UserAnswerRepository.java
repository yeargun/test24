package com.yeargun.questionservice.repository;

import com.yeargun.questionservice.entity.User;
import com.yeargun.questionservice.entity.UserAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserAnswerRepository extends JpaRepository<UserAnswer, Integer> {


    Optional<UserAnswer> findAllById(Integer id);
    Optional<UserAnswer> findAllByUser(User user);

}

