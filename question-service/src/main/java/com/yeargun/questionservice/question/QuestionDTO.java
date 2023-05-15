package com.yeargun.questionservice.question;

import java.util.List;

public record QuestionDTO (
        String questionText,
        List<String> choices,
        List<String> concepts
){


}
