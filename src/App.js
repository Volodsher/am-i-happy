//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const questions = [
  {
    id: 1,
    text: 'Are your clousest Ok?',
  },
  {
    id: 2,
    text: 'Do you do what you have to do?',
  },
  {
    id: 3,
    text: 'Do you do what you can do?',
  },
  {
    id: 4,
    text: 'Do you really do what you whant to do?',
  },
];

function App() {
  const [question, setQuestion] = useState(0);
  const [happy1, setHappy1] = useState(0);
  const [happy2, setHappy2] = useState(0);
  const [happy3, setHappy3] = useState(0);

  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionChange = (changeEvent) => {
    setSelectedOption(changeEvent.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    question === 3 ? setQuestion(0) : setQuestion(question + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Are you happy?</h1>
      </header>
      <form onSubmit={handleFormSubmit}>
        <h2>{questions[question].text}</h2>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="point"
              value="1"
              onChange={handleOptionChange}
            />
            1
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="point"
              value="2"
              onChange={handleOptionChange}
            />
            2
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="point"
              value="3"
              onChange={handleOptionChange}
            />
            3
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="point"
              value="4"
              onChange={handleOptionChange}
            />
            4
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="point"
              value="5"
              onChange={handleOptionChange}
            />
            5
          </label>
        </div>
        <div className="form-group">
          <button className="" type="submit">
            Submit
          </button>
        </div>
        {selectedOption}
        <p>happy1 = {happy1}</p>
        <p>happy2 = {happy2}</p>
        <p>happy3 = {happy3}</p>
      </form>
    </div>
  );
}

export default App;
