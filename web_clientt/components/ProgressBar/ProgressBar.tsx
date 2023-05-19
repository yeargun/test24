import styles from "../../styles/ProgressBar.module.css";

interface ProgressBarProps {
  percent: number;
  handleOnMouseEnter: Function;
  handleOnMouseLeave: Function;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  percent,
  handleOnMouseEnter,
  handleOnMouseLeave,
}) => {
  const progressBarStyles = {
    width: `${percent}%`,
  };

  return (
    <div
      className={styles.progressBarContainer}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <div className={styles.progressBar} style={progressBarStyles}></div>
      <div className={styles.progressBarPercent}>{percent}%</div>
    </div>
  );
};

export default ProgressBar;
