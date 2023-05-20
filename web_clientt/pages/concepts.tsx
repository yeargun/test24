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

function concepts() {
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
      {concepts &&
        concepts.map((concept, index) => (
          <div key={index}>
            <h1>{concept}</h1>
          </div>
        ))}
    </div>
  );
}

export default concepts;
