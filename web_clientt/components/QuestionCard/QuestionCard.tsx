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
      <div className={styles.questionTextWrapper}>
        <p className={styles.questionText}>{questionText}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={imageUrl}
          alt={"interesting question"}
          height={300}
          width={300}
        />
      </div>

      <AnswerSection choices={choices} />
    </div>
  );
}

export default QuestionCard;
