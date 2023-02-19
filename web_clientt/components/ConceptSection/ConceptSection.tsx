import styles from "../../styles/ConceptSection.module.css";

interface ConceptSection {
  concepts: string[];
}

function ConceptSection({ concepts: concepts }: ConceptSection) {
  const conceptsString = concepts
    .map((concept) => `${concept}, `)
    .join(" ")
    .slice(0, -2);

  console.log(conceptsString);

  return (
    <>
      <div className={styles.concepts}>
        <header className={styles.conceptsText}>{conceptsString}</header>
      </div>
      <br />
    </>
  );
}

export default ConceptSection;
