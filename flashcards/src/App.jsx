import React, { useState } from 'react';
import Flashcard from './components/Flashcard.jsx';
import './App.css';

const cards = [
  { question: "This country's capital is Paris.", answer: "France" },
  { question: "This country's capital is Tokyo.", answer: "Japan" },
  { question: "This country's capital is Ottawa.", answer: "Canada" },
  { question: "This country's capital is Brasília.", answer: "Brazil" },
  { question: "This country's capital is Canberra.", answer: "Australia" },
  { question: "This country's capital is Cairo.", answer: "Egypt" },
  { question: "This country's capital is Berlin.", answer: "Germany" },
  { question: "This country's capital is New Delhi.", answer: "India" },
  { question: "This country's capital is Rome.", answer: "Italy" },
  { question: "This country's capital is Nairobi.", answer: "Kenya" },
  { question: "This country's capital is Seoul.", answer: "South Korea" },
  { question: "This country's capital is Madrid.", answer: "Spain" },
  { question: "This country's capital is Stockholm.", answer: "Sweden" },
  { question: "This country's capital is Bern.", answer: "Switzerland" },
  { question: "This country's capital is Ankara.", answer: "Turkey" },
  { question: "This country's capital is Helsinki.", answer: "Finland" },
  { question: "This country's capital is Oslo.", answer: "Norway" },
  { question: "This country's capital is Budapest.", answer: "Hungary" },
  { question: "This country's capital is Buenos Aires.", answer: "Argentina" },
  { question: "This country's capital is Bangkok.", answer: "Thailand" },
  { question: "This country's capital is Athens.", answer: "Greece" },
  { question: "This country's capital is Lima.", answer: "Peru" },
  { question: "This country's capital is Lisbon.", answer: "Portugal" },
  { question: "This country's capital is Warsaw.", answer: "Poland" },
  { question: "This country's capital is Jakarta.", answer: "Indonesia" }
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState(null); // 'correct' or 'incorrect'
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = cards[currentCardIndex];

  const checkAnswer = () => {
    const guess = userInput.trim().toLowerCase();
    const answer = currentCard.answer.toLowerCase();
    if (guess === answer) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
    setIsFlipped(true); // flip to reveal answer
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      resetState();
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      resetState();
    }
  };

  const resetState = () => {
    setUserInput('');
    setFeedback(null);
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <h1>Capital Pursuit</h1>
      <h2>How strong are your Geography skills? Test how well you know your nations by capital!</h2>
      <p>Card {currentCardIndex + 1} of {cards.length}</p>

      <Flashcard
        question={currentCard.question}
        answer={currentCard.answer}
        isFlipped={isFlipped}
      />

      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your guess here"
      />
      <button onClick={checkAnswer}>Submit</button>

      {feedback === 'correct' && <p style={{ color: 'green' }}> Correct!</p>}
      {feedback === 'incorrect' && <p style={{ color: 'red' }}> Try again!</p>}

      <div>
        <button onClick={prevCard} disabled={currentCardIndex === 0}>←</button>
        <button onClick={nextCard} disabled={currentCardIndex === cards.length - 1}>→</button>
      </div>
    </div>
  );
};

export default App;
