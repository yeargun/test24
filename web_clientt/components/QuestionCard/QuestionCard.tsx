import styles from "../../styles/QuestionCard.module.css";
import Image from "next/image";
import AnswerSection from "components/AnswerSection/AnswerSection";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface QuestionCard {
  questionText: string;
  //cdn man :ok:
  imageURLs: string[] | undefined;
  choices: string[];
  rightChoiceId: number | undefined;
  questionId: string | undefined;
  isLoading: boolean;
  explanation: string | undefined;
  // discussion section opens after client answers the question
  // further content<T> is provided about explanation from the question creator
  // maybe markdown? Is Okay.

  // also even custom html,js? can be provided from the question asker.
  // dom purify?, security issues will arise
}

function QuestionCard({
  questionText: questionText,
  imageURLs: imageURLs,
  choices: choices,
  rightChoiceId: rightChoiceId,
  questionId: questionId,
  isLoading: isLoading,
  explanation: explanation,
}: QuestionCard) {
  console.log("explanation", explanation);

  const expandExplanation = () => {
    console.log("expanding explanation");
  };

  const answerExplanationComponent = explanation && (
    <>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{explanation}</ReactMarkdown>
      <div className={styles.expandWrapper}>
        <hr />
        <button onClick={expandExplanation}>expand</button>
        <hr />
      </div>
    </>
  );

  // must get alttext
  const imageContent = imageURLs && (
    <div className={styles.imageWrapper}>
      {imageURLs.map((imageURL, ind) => (
        <Image
          key={ind}
          draggable={false}
          className={styles.image}
          src={imageURL}
          alt={"interesting question"}
          height={300}
          width={300}
        />
      ))}
    </div>
  );

  const questionContent = (
    <>
      {answerExplanationComponent}
      {!explanation && (
        <div className={styles.questionCardHeaderBackground}></div>
      )}
      <div className={styles.questionTextWrapper}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {questionText}
        </ReactMarkdown>
      </div>
      {imageContent}
    </>
  );

  return (
    <>
      {isLoading && <div className={styles.loader}></div>}

      {!isLoading && (
        <div className={styles.questionCard}>
          {questionContent}
          <AnswerSection
            choices={choices}
            rightChoiceId={rightChoiceId}
            questionId={questionId}
          />
        </div>
      )}
    </>
  );
}

export default QuestionCard;
