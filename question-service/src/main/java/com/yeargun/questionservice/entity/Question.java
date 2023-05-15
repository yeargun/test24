package com.yeargun.questionservice.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="Question")
public class Question {


    @Id
    @GeneratedValue
    private Integer id;

    private String questionText;


    private String username;

    @ElementCollection
    @CollectionTable(name = "question_choices", joinColumns = @JoinColumn(name = "question_id"))
    @Column(name = "choice")
    private List<String> choices;

    @ElementCollection
    @CollectionTable(name = "question_concepts", joinColumns = @JoinColumn(name = "question_id"))
    @Column(name = "concept")
    private List<String> concepts;

    @ElementCollection
    @CollectionTable(name = "question_images", joinColumns = @JoinColumn(name = "question_id"))
    @Column(name = "image")
    private List<String> imageURLs;

    private String explanation;
    private int answerChoiceId;

    public Question(String questionText, List<String> choices, List<String> concepts, String explanation, int answerChoiceId) {
        this.questionText = questionText;
        this.choices = choices;
        this.concepts = concepts;
        this.explanation = explanation;
        this.answerChoiceId = answerChoiceId;
    }
}
