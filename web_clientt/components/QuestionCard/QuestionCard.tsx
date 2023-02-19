import styles from "../../styles/QuestionCard.module.css";
import Image from "next/image";
import AnswerSection from "components/AnswerSection/AnswerSection";

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
  return (
    <div className={styles.questionCard}>
      <div className="questionText">{questionText}</div>
      <Image
        src={imageUrl}
        alt={"interesting question"}
        width={100}
        height={100}
      />
      <AnswerSection choices={choices} />
    </div>
  );
}

export default QuestionCard;
