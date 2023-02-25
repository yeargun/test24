import React, { useState } from "react";
import styles from "../styles/qc.module.css";

const QuestionCardd = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.questioncard}>
      <div className={styles.question}>
        <h2>What is the capital of France?</h2>
      </div>
      <form>
        <div className={styles.options}>
          <div className={styles.option}>
            <input
              type="radio"
              id="option1"
              name="option"
              value="Paris"
              onChange={handleOptionChange}
            />
            <label className={styles.label} htmlFor="option1">
              Paris
            </label>
            <div
              className={`checkmark ${
                selectedOption === "Paris" ? "selected" : ""
              }`}
            ></div>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="option2"
              name="option"
              value="London"
              onChange={handleOptionChange}
            />
            <label className={styles.label} htmlFor="option2">
              London
            </label>
            <div
              className={`checkmark ${
                selectedOption === "London" ? "selected" : ""
              }`}
            ></div>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="option3"
              name="option"
              value="Berlin"
              onChange={handleOptionChange}
            />
            <label className={styles.label} htmlFor="option3">
              Berlin
            </label>
            <div
              className={`checkmark ${
                selectedOption === "Berlin" ? "selected" : ""
              }`}
            ></div>
          </div>
          <div className={styles.option}>
            <input
              type="radio"
              id="option4"
              name="option"
              value="Madrid"
              onChange={handleOptionChange}
            />
            <label className={styles.label} htmlFor="option4">
              Madrid
            </label>
            <div
              className={`checkmark ${
                selectedOption === "Madrid" ? "selected" : ""
              }`}
            ></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuestionCardd;
