package com.yeargun.questionservice.question;


import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Optional;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UploadQuestionDTO {
    private String questionText;
    private List<String> choices;
    private int rightChoice;
    private List<String> imageURLs;
    private String explanation;
    private List<String> concepts;
}
