import Question from "components/Question/Question";
import styles from "../styles/concept1.module.css";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetNextQuestionMutation } from "features/question/questionApiSlice";
import {
  selectAnswerData,
  setNextQuestion,
} from "features/question/questionSlice";
import { selectQuestion } from "features/question/questionSlice";
interface Question {
  questionText: string;
  //cdn man :ok:
  imageUrl: string;
  choices: string[];
  concepts: string[];
  questionId: string | undefined;
}

function Test0() {
  const [getNextQuestion, { isLoading }] = useGetNextQuestionMutation();
  // const [nextQuestion, setNextQuestion] = useState({});

  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectQuestion);
  const { rightChoiceId, explanation } = useSelector(selectAnswerData);
  useLayoutEffect(() => {
    async function fetchNextQuestion() {
      try {
        const res = await getNextQuestion({}).unwrap();
        debugger;
        dispatch(setNextQuestion(res));
      } catch (err) {}
    }
    fetchNextQuestion();
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <Question
        {...currentQuestion}
        isLoading={isLoading}
        concepts={[
          "System Design",
          "Database Management",
          "Computer Science",
          "SQL",
        ]}
        explanation={explanation}
      />
      {(rightChoiceId || rightChoiceId == 0) && (
        <input
          type="button"
          className={styles.nextQuestionButton}
          value={"NEXT"}
          onClick={async (e) => {
            console.log("asdasds");
            e.preventDefault();
            const res = await getNextQuestion({}).unwrap();
            dispatch(setNextQuestion({ ...res }));
          }}
        />
      )}
    </div>
  );
}

export default Test0;
