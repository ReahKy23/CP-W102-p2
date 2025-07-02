import React from "react";

const Flashcard = ({ question, answer, isFlipped }) => {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <p>{question}</p>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
