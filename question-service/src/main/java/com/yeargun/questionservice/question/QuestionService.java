package com.yeargun.questionservice.question;


import com.yeargun.questionservice.entity.Question;
import com.yeargun.questionservice.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository repository;

    public List<Question> getAllQuestions(){return repository.findAll();}

    public Optional<QuestionDTO> getQuestionByQuestionId( String id) {
        return Optional.ofNullable(repository.findById(id)
                .stream()
                .map(question -> new QuestionDTO(
                        question.getQuestionText(),
                        question.getChoices(),
                        question.getConcepts()
                )).collect(Collectors.toList())
                .get(0));

    }



    public QuestionDTO getNextQuestion(){
        //from auth context get user
        // user find random next questionId;
        int randInt = (int) ((Math.random() * (7 - 1)) + 1);
        Optional<QuestionDTO> nextQuestion = getQuestionByQuestionId(String.valueOf(randInt));

        if(nextQuestion.isPresent())
            return nextQuestion.get();
        return null;
    }

    public QuestionAnswerResponseDTO handleQuestionAnswer(QuestionAnswerDTO answerFromUser) {
        Optional<Question> question =  repository.findById(answerFromUser.getQuestionId());
        QuestionAnswerResponseDTO response = new QuestionAnswerResponseDTO();
        if(!question.isPresent())
            return null;



        response.setExplanation(question.get().getExplanation());
        response.setRightChoiceId(question.get().getAnswerChoiceId());
        return response;

    }

    public void uploadQuestion(UploadQuestionDTO uploadRequest, String username) {
        Question question1 = new Question().builder()
                        .questionText(uploadRequest.getQuestionText())
                        .choices(uploadRequest.getChoices())
                        .answerChoiceId(uploadRequest.getRightChoice())
                        .concepts(uploadRequest.getConcepts())
                        .imageURLs(uploadRequest.getImageURLs())
                        .username(username)
                            .build();


        repository.save(
                question1
        );
    }
}
