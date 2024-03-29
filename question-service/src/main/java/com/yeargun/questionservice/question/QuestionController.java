package com.yeargun.questionservice.question;

import com.yeargun.questionservice.auth.LoginResponse;
import com.yeargun.questionservice.entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/v1/question")
@RestController
public class QuestionController {
    @Autowired
    private QuestionService service;

    @PostMapping("/sendAnswer")
    public QuestionAnswerResponseDTO answerQuestion(Authentication authentication,@RequestBody QuestionAnswerDTO answer){
        String loggedInUsername = authentication.getName();
        return service.handleQuestionAnswer(answer, loggedInUsername);
    }

    @GetMapping("/next")
    public ResponseEntity  getNextQuestion(){
        return ResponseEntity.ok(service.getNextQuestion());
    }

    @PostMapping("/upload")
    public int uploadQuestion(Authentication authentication, @RequestBody UploadQuestionDTO request){
        String loggedInUsername = authentication.getName();
        service.uploadQuestion(request, loggedInUsername);
        return 0;
    }
    
    @GetMapping("/getQuestionById")
    public Optional<QuestionDTO> getQuestionById(@RequestParam String questionId){
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
