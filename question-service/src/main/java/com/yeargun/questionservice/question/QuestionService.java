package com.yeargun.questionservice.service;


import com.yeargun.questionservice.dto.QuestionAnswerDTO;
import com.yeargun.questionservice.dto.QuestionAnswerResponseDTO;
import com.yeargun.questionservice.entity.Question;
import com.yeargun.questionservice.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository repository;

    public List<Question> getAllQuestions(){return repository.findAll();}

    public Optional<Question> getQuestionByQuestionId( String id) {
        return repository.findAllByQuestionId(id);
    }



    public Question getNextQuestion(){
        //from auth context get user
        // user find random next questionId;

        return null;
    }

    public QuestionAnswerResponseDTO handleQuestionAnswer(QuestionAnswerDTO answerFromUser) {
        Optional<Question> question =  repository.findAllByQuestionId(answerFromUser.getQuestionId());
        QuestionAnswerResponseDTO response = new QuestionAnswerResponseDTO();
        if(!question.isPresent())
            return null;

        response.setExplanation(question.get().getExplanation());
        response.setRightChoiceId(question.get().getAnswerChoiceId());
        return response;

    }

    public void uploadQuestion(Question question) {
        repository.insert(
                new Question(
                        question.getQuestionId(),
                        question.getQuestionText(),
                        question.getChoices(),
                        question.getExplanation(),
                        question.getAnswerChoiceId()
                )
        );
    }
}
