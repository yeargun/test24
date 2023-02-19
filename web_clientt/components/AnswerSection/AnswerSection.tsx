import styles from "../../styles/AnswerSection.module.css";

interface AnswerSection {
  choices: string[];
}

function AnswerSection({ choices: choices }: AnswerSection) {
  return (
    <div className={styles.answersWrapper}>
      {choices.map((choice, id) => (
        <div key={id}>
          <div>{choice}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default AnswerSection;
