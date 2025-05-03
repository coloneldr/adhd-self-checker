
import React from 'react';

const SummaryCard = ({ responses }) => (
  <div>
    <h2>What might help you regulate:</h2>
    <div className="card-list">
      {responses.map((entry, idx) => (
        <div className="result-card" key={idx}>
          <p><strong>{entry.question}</strong></p>
          <p>{entry.suggestion}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SummaryCard;
