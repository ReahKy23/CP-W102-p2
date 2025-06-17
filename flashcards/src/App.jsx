import React, { useState } from 'react';
import Flashcard from './components/Flashcard.jsx'
import './App.css';

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

  const [freshDeck, setFreshDeck] = useState(false);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const displayNextCard = () => {
    let newIndex = currentCardIndex;
    while (newIndex === currentCardIndex) {
      newIndex = Math.floor(Math.random() * cards.length);
    }
    if (!freshDeck) setFreshDeck(true);
    setCurrentCardIndex(newIndex);
  }

  const currentCard = cards[currentCardIndex];


  return (
    <div className="App">
      <h1>Nations Quiz</h1>
      <h2>How strong are your Geography skills? Test how well you know your nations by capitol!</h2>
      <p>There are {cards.length} cards in this deck</p>
      <Flashcard
        question={freshDeck ? currentCard.question: 'Start!'}
        answer={freshDeck ? currentCard.answer: 'Press the next arrow navigate set!'} />
      <br></br>
      <button onClick={displayNextCard}>→</button>
    </div>

  )
}

export default App