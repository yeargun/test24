import Question from "components/Question/Question";
import styles from "../styles/test0.module.css";
function test0() {
  return (
    <div className={styles.page}>
      <Question
        concepts={[
          "System Design",
          "Database Management",
          "Computer Science",
          "SQL",
        ]}
        imageUrl="https://www.w3schools.com/howto/img_avatar2.png"
        questionText={"What's CAP theorem?"}
        choices={["A) xd", "B) xdd", "C) XDdDd"]}
      />
    </div>
  );
}

export default test0;
