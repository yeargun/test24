package com.yeargun.questionservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionAnswerDTO {

    private String questionId;
    private int choosenChoiceId;
}
