import { useState, useEffect, FormEvent } from "react";
import styles from "../../styles/AnswerSection.module.css";
// import { ARGUN } from "../../utils/api/axios";
// import { AnswerResponse } from "./AnswerResponse";
import { useDispatch } from "react-redux";
import { answerQuestionFetch } from "../../redux-saga/Question/questionState";

interface AnswerSection {
  choices: string[];
  handleAnswerExplanation: (explanation: string) => void;
  rightChoiceId: number;
}
// TODO: yeargun use signal
// const [getSelectedChoice, setSelectedChoice] = useSignal();

function AnswerSection({
  choices,
  handleAnswerExplanation,
  rightChoiceId,
}: AnswerSection) {
  const dispatch = useDispatch();
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | undefined>(
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

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("asdasd");
    if (!rightChoiceId) dispatch(answerQuestionFetch());
  };

  return (
    <div className={styles.answersWrapper}>
      <form
        className={
          rightChoiceId != undefined && rightChoiceId != null
            ? styles.preSubmitForm
            : styles.form
        }
        onSubmit={handleFormSubmit}
      >
        {choices &&
          choices.map((choice, index) => (
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
        {!rightChoiceId && (
          <input
            type="submit"
            className={styles.submitButton}
            value={"SUBMIT"}
          />
        )}
      </form>
    </div>
  );
}

export default AnswerSection;
