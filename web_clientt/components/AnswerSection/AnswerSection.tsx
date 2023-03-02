import { useState } from "react";
import styles from "../../styles/AnswerSection.module.css";
import { ARGUN } from "../../utils/api/axios";
import { AnswerResponse } from "./AnswerResponse";

interface AnswerSection {
  choices: string[];
  handleAnswerExplanation: (explanation: string) => void;
}
// TODO: yeargun use signal
// const [getSelectedChoice, setSelectedChoice] = useSignal();

function AnswerSection({ choices, handleAnswerExplanation }: AnswerSection) {
  const [rightChoiceId, setRightChoiceId] = useState<number | undefined>(
    undefined
  );

  const [selectedChoiceId, setSelectedChoiceId] = useState<number | undefined>(
    undefined
  );

  const questionChoiceStyling = (index: number) => {
    if (rightChoiceId != undefined && rightChoiceId != null) {
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
        className={
          rightChoiceId != undefined && rightChoiceId != null
            ? styles.preSubmitForm
            : styles.form
        }
        onSubmit={(e) => {
          e.preventDefault();
          if (rightChoiceId != undefined && rightChoiceId != null) return;
          if (selectedChoiceId || selectedChoiceId == 0)
            ARGUN.post("/sendAnswer", {
              questionId: 1,
              answer: selectedChoiceId,
            })
              .then((response) => {
                console.log("response", response);
                setRightChoiceId(response.data.rightChoiceId);
                handleAnswerExplanation(response.data.explanation);
              })
              .catch((err) => console.log("diggahhh", err));
        }}
      >
        {choices.map((choice, index) => (
          <div
            className={questionChoiceStyling(index)}
            key={index}
            onClick={(e) => {
              e.preventDefault();
              if (rightChoiceId != undefined && rightChoiceId != null) return;
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
        {(rightChoiceId == undefined || rightChoiceId == null) && (
          <input
            type="submit"
            className={styles.submitWrapper}
            value={"SUBMIT"}
          />
        )}
      </form>
    </div>
  );
}

export default AnswerSection;
