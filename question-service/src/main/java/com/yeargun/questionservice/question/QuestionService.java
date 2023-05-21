package com.yeargun.questionservice.question;


import com.yeargun.questionservice.entity.Question;
import com.yeargun.questionservice.entity.User;
import com.yeargun.questionservice.entity.UserAnswer;
import com.yeargun.questionservice.repository.QuestionRepository;
import com.yeargun.questionservice.repository.UserAnswerRepository;
import com.yeargun.questionservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    UserAnswerRepository userAnswerRepository;

    public List<Question> getAllQuestions(){return questionRepository.findAll();}

    public Optional<QuestionDTO> getQuestionByQuestionId( String id) {
        return Optional.ofNullable(questionRepository.findById(id)
                .stream()
                .map(question -> new QuestionDTO(
                        question.getId(),
                        question.getQuestionText(),
                        question.getChoices(),
                        question.getConcepts(),
                        question.getImageURLs()
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

    public QuestionAnswerResponseDTO handleQuestionAnswer(QuestionAnswerDTO answerFromUser, String username) {
        Optional<Question> question =  questionRepository.findById(answerFromUser.getQuestionId());
        if(!question.isPresent())
            return null;

        Optional<User> user =  userRepository.findByUsername(username);


        UserAnswer userAnswer = new UserAnswer().builder()
                .answer(answerFromUser.getChoosenChoiceId())
                .user(user.get())
                .question(question.get())
                .build();
        userAnswerRepository.save(userAnswer);



        QuestionAnswerResponseDTO response = new QuestionAnswerResponseDTO();




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
                        .explanation(uploadRequest.getExplanation())
                            .build();


        questionRepository.save(
                question1
        );
    }
}
