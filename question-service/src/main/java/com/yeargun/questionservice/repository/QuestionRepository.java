package com.yeargun.questionservice.repository;

import com.yeargun.questionservice.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, String> {

    Optional<Question> findAllById(String id);


}
