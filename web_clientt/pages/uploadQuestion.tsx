import styles from "../styles/uploadQuestion.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

function UploadQuestion() {
  const [questionText, setQuestionText] = useState(markdown);

  const questionTextChangeHandler = (e) => {
    setQuestionText(e.target.value);
  };

  //   return <div>asd</div>;
  return (
    <div className={styles.page}>
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
            <ReactMarkdown
              children={questionText}
              remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadQuestion;
