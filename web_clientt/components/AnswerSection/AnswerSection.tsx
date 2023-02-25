import styles from "../../styles/AnswerSection.module.css";

interface AnswerSection {
  choices: string[];
}

function AnswerSection({ choices: choices }: AnswerSection) {
  return (
    <div className={styles.answersWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("onsubmit e:", e.target);
        }}
      >
        {choices.map((choice, id) => (
          <div className={styles.choice} key={id}>
            <input type={"radio"} id={id} name="xd" value={id} />
            <label key={id} htmlFor={id}>
              {choice}
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AnswerSection;
