package com.yeargun.questionservice.controller;

import com.yeargun.questionservice.dto.QuestionAnswerDTO;
import com.yeargun.questionservice.dto.QuestionAnswerResponseDTO;
import com.yeargun.questionservice.entity.Question;
import com.yeargun.questionservice.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/question")
@RestController
public class QuestionController {
    @Autowired
    private QuestionService service;

    @PostMapping("/sendAnswer")
    public QuestionAnswerResponseDTO answerQuestion(@RequestBody QuestionAnswerDTO answer){
        return service.handleQuestionAnswer(answer);
    }

    @PostMapping("/uploadQuestion")
    public int uploadQuestion(@RequestBody Question question){
        service.uploadQuestion(question);
        return 0;
    }
    
    @GetMapping("/getQuestionById")
    public Optional<Question> getQuestionById(@RequestParam String questionId){
        return service.getQuestionByQuestionId(questionId);
    }

    @GetMapping("/all")
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public List<Question> getAllTheProducts() {
        int i = 5;
        i = 6;
        return service.getAllQuestions();
    }
}
