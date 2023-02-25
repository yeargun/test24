import { useState } from "react";
import styles from "../../styles/AnswerSection.module.css";

interface AnswerSection {
  choices: string[];
}

function AnswerSection({ choices: choices }: AnswerSection) {
  const selectedChoiceStyle = styles.selectedChoice;
  const nonSelectedChoiceStyle = styles.nonSelectedChoice;

  // const [getSelectedChoice, setSelectedChoice] = useSignal();
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);

  return (
    <div className={styles.answersWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("onsubmit e:", e.target.value);
        }}
      >
        {choices.map((choice, id) => (
          <div
            className={
              id == selectedChoiceId
                ? selectedChoiceStyle
                : nonSelectedChoiceStyle
            }
            key={id}
            onClick={(e) => {
              console.log(selectedChoiceId);
              console.log(id);
              console.log("asd");
              if (selectedChoiceId == id) setSelectedChoiceId(id);
              else setSelectedChoiceId(id);
            }}
          >
            <input type={"radio"} id={id} name="choice" value={id} />
            <label key={id} htmlFor={id}>
              {/* <div className="a-b-c going to be">{id}</div> */}
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
