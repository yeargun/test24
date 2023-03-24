package com.yeargun.questionservice.question;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionAnswerResponseDTO {

    private String explanation;
    private int rightChoiceId;
}
