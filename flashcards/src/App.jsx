import './App.css';
import Flashcard from './components/Flashcard.jsx'

const App = () => {

  return (
    <div className="App">
      <h1>Nations Quiz</h1>
      <h2>How strong are your Geography skills? Test how well you know your nations by capitol!</h2>
      <Flashcard />
      <br></br>
      <button>→</button>
    </div>
    
  )
}

export default App