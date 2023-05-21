package com.yeargun.questionservice.question;

import java.util.List;

public record QuestionDTO (
        int id,
        String questionText,
        List<String> choices,
        List<String> concepts,
        List<String> imageURLs
){


}
