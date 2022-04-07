import './App.css';
import {
  FormControl,
  Slider,
  Box,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectHappyData } from './app/features/happyCounter/happyCounterSlice';

const questionsData = [
  {
    id: 0,
    text: 'Are your clousest onces Ok?',
    result: 0,
  },
  {
    id: 1,
    text: 'Do you do what you have to do?',
    result: 0,
  },
  {
    id: 2,
    text: 'Do you do what you can do?',
    result: 0,
  },
  {
    id: 3,
    text: 'Do you really do what you whant to do?',
    result: 0,
  },
];

function App() {
  const happyData = useSelector(selectHappyData);

  const [questions, setQuestions] = useState(questionsData);
  const [question, setQuestion] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(0);

  // const handleOptionChange = (changeEvent) => {
  //   setSelectedOption(changeEvent.target.value);
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    switch (question) {
      case 0:
        setQuestions((prevState) => [
          ...prevState,
          (prevState[0].result = parseInt(selectedOption, 10)),
        ]);
        break;
      case 1:
        setQuestions((prevState) => [
          ...prevState,
          (prevState[1].result = parseInt(selectedOption, 10)),
        ]);
        break;
      case 2:
        setQuestions((prevState) => [
          ...prevState,
          (prevState[2].result = parseInt(selectedOption, 10)),
        ]);
        break;
      case 3:
        setQuestions((prevState) => [
          ...prevState,
          (prevState[3].result = parseInt(selectedOption, 10)),
        ]);
        break;
    }

    setSelectedOption(0);
    setQuestion(question + 1);
  };

  const refreshQuiz = () => {
    setQuestion(-1);
  };

  const result =
    ((questions[0].result +
      questions[1].result +
      questions[2].result +
      questions[3].result) /
      4) *
    100;

  return question === 4 ? (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>You are {result} % happy</h1>
      <Button variant="outlined" onClick={refreshQuiz}>
        Try again
      </Button>
    </div>
  ) : question === -1 ? (
    <div className="App">
      <header className="App-header">
        <h1>Are you happy at this moment?</h1>
      </header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <h2>How your happiness deppends on?</h2>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '10%',
              padding: 10,
            }}
          >
            My clousest
          </div>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{ width: '50%' }}
          />
          <div
            style={{
              width: '10%',
              padding: 10,
            }}
          >
            My inner world
          </div>
        </Box>
        <Button variant="outlined" onClick={handleFormSubmit}>
          Next question
        </Button>
      </Box>
    </div>
  ) : (
    <QuestionForm
      handleFormSubmit={handleFormSubmit}
      questions={questions}
      question={question}
    />
  );
}

function QuestionForm(props) {
  const [selectOption, setSelectOption] = useState(0);
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();

  // const option = useSelector(selectedOption);
  // const happyData = useSelector(selectHappyData);
  const { handleFormSubmit, questions, question } = props;

  return (
    <div className="">
      <header className="App-header">
        <h1>Are you happy at this moment?</h1>
      </header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* <h2>{questions[question].text}</h2> */}
        <FormControl>
          <FormLabel id="label">Choose the answer</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="1"
              control={<Radio size="medium" />}
              label="Yes"
              onChange={(e) => setSelectOption(e.target.value)}
              checked={selectOption === '1'}
            />
            <FormControlLabel
              value="0"
              control={<Radio size="medium" />}
              label="No"
              onChange={(e) => setSelectOption(e.target.value)}
              checked={selectOption === '0'}
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="outlined"
          onClick={() => {
            setSelectOption(0);
            // changeResult(selectOption);
          }}
        >
          Next question
        </Button>
      </Box>
      {/* <p>this is{option}</p> */}
    </div>
  );
}

export default App;
