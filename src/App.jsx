import { useEffect, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const options = {
    good: 'Good',
    neutral: 'Neutral',
    bad: 'Bad',
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback === null
      ? {
          good: 0,
          neutral: 0,
          bad: 0,
        }
      : JSON.parse(savedFeedback);
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const total = Object.values(feedback).reduce((acc, value) => acc + value, 0);

  return (
    <>
      <Description />

      <Options
        options={options}
        feedbackHandler={updateFeedback}
        resetHandler={resetFeedback}
      />

      {total > 0 && (
        <Feedback
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
        />
      )}
      {total === 0 && <Notification />}
    </>
  );
}

export default App;
