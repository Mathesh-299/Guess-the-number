import { useState } from 'react';
import './App.css';
import Result from './Component/Result';

function App() {
  const [term, setTerm] = useState("");
  const [secretNum, setSecretNum] = useState(generateRandomNumber());

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const resetGame = () => {
    setSecretNum(generateRandomNumber());
    setTerm("");
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">
          Guess the number between 1 to 10
        </label>
      </div>
      <input
        id="term"
        type="number"
        name="term"
        value={term}
        onChange={handleChange}
      />
      <Result secretNum={secretNum} term={term} />
      <button onClick={resetGame} className='head'>Reset Game</button>
    </div>
  );
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export default App;
