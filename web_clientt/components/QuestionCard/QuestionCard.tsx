import styles from "../../styles/QuestionCard.module.css";
import Image from "next/image";
import AnswerSection from "components/AnswerSection/AnswerSection";
import { useState } from "react";
interface QuestionCard {
  questionText: string;
  //cdn man :ok:
  imageUrl: string;
  choices: string[];
  rightChoiceId: number | undefined;
  questionId: string | undefined;
  isLoading: boolean;
  // discussion section opens after client answers the question
  // further content<T> is provided about explanation from the question creator
  // maybe markdown? Is Okay.

  // also even custom html,js? can be provided from the question asker.
  // dom purify?, security issues will arise
}

function QuestionCard({
  questionText: questionText,
  imageUrl: imageUrl,
  choices: choices,
  rightChoiceId: rightChoiceId,
  questionId: questionId,
  isLoading: isLoading,
}: QuestionCard) {
  const [answerExplanation, setAnswerExplanation] = useState<
    string | undefined
  >("");

  const handleAnswerExplanation = (explanation: string) => {
    setAnswerExplanation(explanation);
  };

  const expandExplanation = () => {
    console.log("expanding explanation");
  };

  const answerExplanationComponent = answerExplanation && (
    // npm react-markdown maybe
    <>
      <p>{answerExplanation}</p>
      <div className={styles.expandWrapper}>
        <hr />
        <button>expand</button>
        <hr />
      </div>
    </>
  );

  const questionContent = (
    <>
      {answerExplanationComponent}
      {!answerExplanation && (
        <div className={styles.questionCardHeaderBackground}></div>
      )}
      <div className={styles.questionTextWrapper}>
        <p className={styles.questionText}>{questionText}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          draggable={false}
          className={styles.image}
          src={imageUrl}
          alt={"interesting question"}
          height={300}
          width={300}
        />
      </div>
    </>
  );

  return (
    <div className={styles.questionCard}>
      {!isLoading && questionContent}
      {!isLoading && (
        <AnswerSection
          choices={choices}
          rightChoiceId={rightChoiceId}
          handleAnswerExplanation={handleAnswerExplanation}
          questionId={questionId}
        />
      )}
      {isLoading && <div className={styles.loader}></div>}
    </div>
  );
}

export default QuestionCard;
