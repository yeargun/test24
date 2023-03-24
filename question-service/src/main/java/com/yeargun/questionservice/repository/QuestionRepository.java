package com.yeargun.questionservice.repository;

import com.yeargun.questionservice.entity.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface QuestionRepository extends MongoRepository<Question, String> {

    Optional<Question> findAllById(String id);

    Optional<Question> findAllByQuestionId(String questionId);

}
