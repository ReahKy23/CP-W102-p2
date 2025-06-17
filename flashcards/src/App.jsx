import './App.css';
import Flashcard from './components/Flashcard.jsx'
import React, { useState } from 'react';


// cards array
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
  { question: "This country's capital is Ankara.", answer: "Turkey" }
];

const App = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = cards[currentCardIndex];
  return (
    <div className="App">
      <h1>Nations Quiz</h1>
      <h2>How strong are your Geography skills? Test how well you know your nations by capitol!</h2>
      <Flashcard 
      question={currentCard.question} 
      answer={currentCard.answer} />
      <br></br>
      <button className='nextCard'>→</button>
    </div>

  )
}

export default App