package com.yeargun.questionservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDTO {

    private String id;
    private String questionId;
    private String questionText;
    private List<String> choices;
    private String explanation;
}
