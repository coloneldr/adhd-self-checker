
import React, { useState } from 'react';
import questions from './data/questions-expanded';
import QuestionCard from './components/QuestionCard';
import SummaryCard from './components/SummaryCard';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [complete, setComplete] = useState(false);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[current];
    const newAnswers = [...answers, { question: currentQuestion.text, answer }];
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setComplete(true);
    }
  };

  const responses = answers
    .filter(a => a.answer === "No" || a.answer === "Not sure")
    .map(a => ({
      question: a.question,
      suggestion: questions.find(q => q.text === a.question)?.suggestion
    }));

  return (
    <div className="app">
      <h1>ADHD Self-Regulation Checker</h1>
      {!complete ? (
        <QuestionCard question={questions[current]} onAnswer={handleAnswer} />
      ) : (
        <SummaryCard responses={responses} />
      )}
    </div>
  );
};

export default App;
