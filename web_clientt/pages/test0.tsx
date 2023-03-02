import Question from "components/Question/Question";
import styles from "../styles/test0.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ARGUN } from "../utils/api/axios";

interface Question {
  questionText: string;
  //cdn man :ok:
  imageUrl: string;
  choices: string[];
  concepts: string[];
}

//should i define const functions outside of the funtion. realy makes no sense..
//them being inside component related to state probably ?
function test0() {
  const handleSettingsButtonClick = () => {};
  const [fetchedQuestion, setFetchedQuestion] = useState<Question>(undefined);

  useEffect(() => {
    const fetchQuestion = async () => {
      ARGUN.get("/api/question")
        .then((res) => setFetchedQuestion(res))
        .catch((err) => console.log(err));
    };

    fetchQuestion();
  }, []);
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
        questionText={
          "What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?What's CAP theorem?"
        }
        choices={[
          "Consistency, Availability, Progress ",
          "Consistency, Availability, Partition Tolerance ",
          "Capacity, Availability, Partition Tolerance ",
          "Consistency, Availability, Progress",
        ]}
      />
      <Image
        className={styles.settingsIcon}
        src={"/settings-icon.png"}
        alt={"settings-icon"}
        width={50}
        height={50}
        onClick={handleSettingsButtonClick}
      />
    </div>
  );
}

export default test0;
