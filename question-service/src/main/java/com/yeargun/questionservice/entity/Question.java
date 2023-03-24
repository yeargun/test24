package com.yeargun.questionservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@NoArgsConstructor
@Document(collection="questions")
public class Question {

    @Id
    private String id;

    @Indexed(unique=true)
    private String questionId;
    private String questionText;
    private List<String> choices;
    private List<String> concepts;
    private String explanation;
    private int answerChoiceId;

    public Question(String questionId, String questionText, List<String> choices, String explanation, int answerChoiceId) {
        this.questionId = questionId;
        this.questionText = questionText;
        this.choices = choices;
        this.explanation = explanation;
        this.answerChoiceId = answerChoiceId;
    }
}
