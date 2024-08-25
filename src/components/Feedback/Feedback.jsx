import styles from './Feedback.module.css';

const Feedback = ({ good, bad, neutral }) => {
  const total = bad + good + neutral;
  const positivePercent = Math.round((good / total) * 100);

  return (
    <div className={styles.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercent}%</p>
    </div>
  );
};

export default Feedback;
