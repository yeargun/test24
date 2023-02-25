import Question from "components/Question/Question";
import styles from "../styles/test0.module.css";
import Image from "next/image";

function test0() {
  return (
    <div className={styles.page}>
      <Question
        concepts={[
          "System Design",
          "Database Management",
          "Computer Science",
          "SQL",
          "Database Management",
          "Computer Science",
          "SQL",
          "Database Management",
          "Computer Science",
          "SQL",
        ]}
        imageUrl="https://www.w3schools.com/howto/img_avatar2.png"
        questionText={"What's CAP theorem?"}
        choices={[
          "A) Consistency, Availability, Progress ",
          "B) Consistency, Availability, Partition Tolerance ",
          "C) Capacity, Availability, Partition Tolerance ",
          "D) Consistency, Availability, Progress ",
        ]}
      />
      <Image
        className={styles.settingsIcon}
        // onClick={}
        src={"/settings-icon.png"}
        alt={"settings-icon"}
        width={50}
        height={50}
      />
    </div>
  );
}

export default test0;
