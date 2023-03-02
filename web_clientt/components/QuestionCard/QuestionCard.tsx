import styles from "../../styles/QuestionCard.module.css";
import Image from "next/image";
import AnswerSection from "components/AnswerSection/AnswerSection";
import { useState } from "react";
interface QuestionCard {
  questionText: string;
  //cdn man :ok:
  imageUrl: string;
  choices: string[];
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
}: QuestionCard) {
  const [imgHovered, setImgHovered] = useState(false);
  const [answerExplanation, setAnswerExplanation] = useState<
    string | undefined
  >("");

  const handleAnswerExplanation = (explanation: string) => {
    console.log("xd", explanation);
    setAnswerExplanation(explanation);
  };

  const expandExplanation = () => {
    console.log("expanding explanation");
  };

  return (
    <div className={styles.questionCard}>
      {answerExplanation && (
        <>
          <p>{answerExplanation}</p>
          <div className={styles.expandWrapper}>
            <hr />
            <button>expand</button>
            <hr />
          </div>
        </>
      )}

      <div className={styles.questionCardHeaderBackground}></div>
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

      <AnswerSection
        choices={choices}
        handleAnswerExplanation={handleAnswerExplanation}
      />
    </div>
  );
}

export default QuestionCard;
