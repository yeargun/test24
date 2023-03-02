import { useState } from "react";
import styles from "../../styles/AnswerSection.module.css";
import { ARGUN } from "../../utils/api/axios";
import { AnswerResponse } from "./AnswerResponse";

interface AnswerSection {
  choices: string[];
}

function AnswerSection(
  { choices: choices }: AnswerSection,
  setAnswerExplanation: (explanation: string) => void
) {
  const [rightChoiceId, setRightChoiceId] = useState<number | undefined>(
    undefined
  );

  // TODO: yeargun use signal
  // const [getSelectedChoice, setSelectedChoice] = useSignal();
  const [selectedChoiceId, setSelectedChoiceId] = useState<number | undefined>(
    undefined
  );

  const questionChoiceStyling = (index: number) => {
    if (rightChoiceId || rightChoiceId == 0) {
      if (index == rightChoiceId) return styles.correctChoice;
      else if (index != rightChoiceId && index == selectedChoiceId)
        return styles.faultyAnswerChoice;
      else return styles.nonSelectedChoice;
    } else {
      if (index == selectedChoiceId) return styles.selectedChoice;
      else return styles.nonSelectedChoice;
    }
  };

  return (
    <div className={styles.answersWrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (selectedChoiceId || selectedChoiceId == 0)
            ARGUN.post("/api/stfu", { questionId: 1, answer: selectedChoiceId })
              .then((response) => {
                setRightChoiceId(response.data.rightChoiceId);
                setAnswerExplanation(response.data.explanation);
              })
              .catch((err) => console.log("diggahhh"));
        }}
      >
        {choices.map((choice, index) => (
          <div
            className={questionChoiceStyling(index)}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              if (selectedChoiceId == index) setSelectedChoiceId(undefined);
              else setSelectedChoiceId(index);
            }}
          >
            <input
              type={"radio"}
              id={index.toString()}
              name="choice"
              value={index}
            />
            <label key={index} htmlFor={index.toString()}>
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
