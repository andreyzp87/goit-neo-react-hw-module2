import styles from './Options.module.css';

const Options = ({ options, showReset, feedbackHandler, resetHandler }) => {
  return (
    <div className={styles.options}>
      {Object.keys(options).map(option => (
        <button key={option} onClick={() => feedbackHandler(option)}>
          {options[option]}
        </button>
      ))}

      {showReset && <button onClick={() => resetHandler()}>Reset</button>}
    </div>
  );
};

export default Options;
