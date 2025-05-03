
import React from 'react';

const QuestionCard = ({ question, onAnswer }) => (
  <div className="card">
    <h2>{question.text}</h2>
    <div className="buttons">
      {question.options.map((option, idx) => (
        <button key={idx} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
