import ProgressBar from "components/ProgressBar/ProgressBar";
import styles from "../../styles/ConceptSection.module.css";
import { useState } from "react";

interface ConceptSection {
  concepts: string[];
}

function ConceptSection({ concepts: concepts }: ConceptSection) {
  const [showConcepts, setShowConcepts] = useState<Boolean>(false);
  const conceptsString = concepts
    .map((concept) => `${concept}, `)
    .join(" ")
    .slice(0, -2);

  const handleOnMouseEnterProgressBar = () => {
    console.log("entered");
    setShowConcepts(true);
  };
  const handleOnMouseLeaveProgressBar = () => {
    setShowConcepts(false);
  };

  return (
    <>
      {showConcepts && (
        <div className={styles.concepts}>
          <header className={styles.conceptsText}>{conceptsString}</header>

          <ProgressBar
            percent={50}
            handleOnMouseEnter={handleOnMouseEnterProgressBar}
            handleOnMouseLeave={handleOnMouseLeaveProgressBar}
          />
        </div>
      )}
      {!showConcepts && (
        <div className={styles.concepts}>
          <ProgressBar
            percent={50}
            handleOnMouseEnter={handleOnMouseEnterProgressBar}
            handleOnMouseLeave={handleOnMouseLeaveProgressBar}
          />
        </div>
      )}
    </>
  );
}

export default ConceptSection;
