import styles from "../styles/uploadQuestion.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import TagInput from "components/TagInput";

// TODO: Enterla yeni şık eklemeye geçsin
// TODO: Before upload popup should open and ask user if he wants to add tags
// for the question. should mention non required.
const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;
const firstChoicesUuid = uuidv4();
function UploadQuestion() {
  const [questionText, setQuestionText] = useState(markdown);

  // string keys remain insertion order es2015 so we can use key: text yes?
  const [choices, setChoices] = useState({ [firstChoicesUuid]: "" });
  const [currentlyEditingChoiceId, setCurrentlyEditingChoiceId] =
    useState(firstChoicesUuid);

  const [currentlyEditingChoiceStr, setCurrentlyEditingChoiceStr] =
    useState("");

  const questionTextChangeHandler = (e) => {
    setQuestionText(e.target.value);
  };

  const handleAddedQuestionSelected = (index) => {
    console.log("this index selected", index);
  };

  const handleEditingChoiceStrChange = (e) => {
    setCurrentlyEditingChoiceStr(e.target.value);
  };

  const handleSaveEditedChoice = (key) => {
    setChoices((prevState) => ({
      ...prevState,
      [key]: currentlyEditingChoiceStr,
    }));
    setCurrentlyEditingChoiceStr("");
    setCurrentlyEditingChoiceId(undefined);
  };

  const handleDiscardEditedChoice = (key) => {
    setCurrentlyEditingChoiceId(undefined);
    setCurrentlyEditingChoiceStr("");
  };

  const handleChoiceEditButtonPress = (key, text) => {
    setCurrentlyEditingChoiceStr(text);
    setCurrentlyEditingChoiceId(key);
  };

  const addAnotherChoice = () => {
    let uuid = uuidv4();
    setChoices((prevState) => ({
      ...prevState,
      [uuid]: "",
    }));
    setCurrentlyEditingChoiceId(uuid);
  };

  const removeChoiceWithKey = (key) => {
    const updatedObject = { ...choices };
    delete updatedObject[key];
    setChoices(updatedObject);
  };

  const uploadQuestion = () => {
    console.log("update question");
  };

  const currentlySelectedChoice = (key, text) => (
    <div key={key} className={styles.editingChoiceStrMdWrapper}>
      <textarea
        placeholder="enter the choice.."
        className={styles.editingChoiceStrInput}
        value={currentlyEditingChoiceStr}
        onChange={handleEditingChoiceStrChange}
      />
      <div className={styles.editingChoiceMdWrapper}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {currentlyEditingChoiceStr}
        </ReactMarkdown>

        {/* this should be check mark and close editing button */}
        <div className={styles.editingChoiceButtons}>
          <button
            className={styles.saveEditedChoiceButton}
            onClick={(e) => handleSaveEditedChoice(key)}
          >
            <Image
              className={styles.checkIcon}
              draggable={false}
              src={"/check-icon.svg"}
              alt={"check-icon"}
              width={10}
              height={10}
            />
          </button>
          <button
            className={styles.discardChangesEditedChoice}
            onClick={(e) => handleDiscardEditedChoice(key)}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.page}>
      <h1>Upload a question</h1>
      <div className={styles.str2mdTable}>
        <div className={styles.tabs}>
          <div className={styles.strTab}>Question-text</div>
          <div className={styles.mdTab}>markdown</div>
        </div>
        <hr />
        <div className={styles.contents}>
          <textarea
            value={questionText}
            className={styles.textContent}
            placeholder="enter text..."
            onChange={questionTextChangeHandler}
          />
          <div className={styles.mdContent}>
            {/* sdfsdff */}
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {questionText}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className={styles.choices}>
        {Object.entries(choices).map(([key, value]) => {
          console.log("currentlyEditingChoiceId", currentlyEditingChoiceId);
          console.log("item.key", key);
          console.log(key == currentlyEditingChoiceId);

          if (key == currentlyEditingChoiceId) {
            return currentlySelectedChoice(key, value);
          } else
            return (
              <div onClick={() => {}} className={styles.addedChoice}>
                <div className={styles.addedChoiceMdContent}>{value}</div>

                <div className={styles.addedChoiceButtons}>
                  <button
                    className={styles.editAddedChoiceButton}
                    onClick={(e) => handleChoiceEditButtonPress(key, value)}
                  >
                    <Image
                      className={styles.editIcon}
                      draggable={false}
                      src={"/edit-icon.svg"}
                      alt={"edit-icon"}
                      width={10}
                      height={10}
                    />
                  </button>
                  <button
                    onClick={(e) => removeChoiceWithKey(key)}
                    className={styles.removeAddedChoiceButton}
                  >
                    -
                  </button>
                </div>
              </div>
            );
        })}
        <div
          className={styles.addExtraChoiceWrapper}
          onClick={addAnotherChoice}
        >
          Add another choice..
        </div>
      </div>

      {/* <TagInput className={styles.questionTags} /> */}
      <button className={styles.uploadButton} onClick={uploadQuestion}>
        Upload
      </button>
    </div>
  );
}

export default UploadQuestion;
