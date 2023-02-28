import { useState } from "react";
import styles from "../../styles/AnswerSection.module.css";
import { ARGUN } from "../../utils/api/axios";

interface AnswerSection {
  choices: string[];
}

function AnswerSection({ choices: choices }: AnswerSection) {
  const selectedChoiceStyle = styles.selectedChoice;
  const nonSelectedChoiceStyle = styles.nonSelectedChoice;

  // TODO: yeargun use signal
  // const [getSelectedChoice, setSelectedChoice] = useSignal();
  const [selectedChoiceId, setSelectedChoiceId] = useState<number | undefined>(
    undefined
  );

  return (
    <div className={styles.answersWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ARGUN.post("/api/stfu", { ok: "e.target" })
            .then((res) => console.log("crazy res"))
            .catch((err) => console.log("diggahhh"));
        }}
      >
        {choices.map((choice, index) => (
          <div
            className={
              index == selectedChoiceId
                ? selectedChoiceStyle
                : nonSelectedChoiceStyle
            }
            key={index}
            onClick={(e) => {
              e.preventDefault();
              if (selectedChoiceId == index) setSelectedChoiceId(undefined);
              else setSelectedChoiceId(index);
            }}
          >
            <input type={"radio"} id={index} name="choice" value={index} />
            <label key={index} htmlFor={index}>
              {/* to display choice labels */}
              {/* <div className="a-b-c going to be">{id}</div> */}
              {choice}
            </label>
          </div>
        ))}
        <input
          type="submit"
          className={styles.submitWrapper}
          value={"SUBMIT"}
        />
      </form>
    </div>
  );
}

export default AnswerSection;
