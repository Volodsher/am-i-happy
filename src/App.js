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
import {
  changeResult,
  refreshQuiz,
  changeInnerOuter,
  selectHappyData,
  selectedQuestion,
  selectInnerHappiness,
  selectOuterHappiness,
} from './app/features/happyCounter/happyCounterSlice';

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
  const innerHStore = useSelector(selectInnerHappiness);
  const outerHStore = useSelector(selectOuterHappiness);
  const dispatch = useDispatch();

  const [questions, setQuestions] = useState(questionsData);
  const [question, setQuestion] = useState(-1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [innerH, setInnerH] = useState(5);
  const [outerH, setOuterH] = useState(5);

  const handleChange = (event, newValue) => {
    setInnerH(newValue);
    setOuterH(10 - newValue);
  };

  const handleSubmit = () => {
    setInnerH(5);
    setOuterH(5);
    dispatch(refreshQuiz());
    dispatch(changeInnerOuter([innerH, outerH]));
  };

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

  const result =
    ((questions[0].result +
      questions[1].result +
      questions[2].result +
      questions[3].result) /
      4) *
    100;

  const questionNumber = useSelector(selectedQuestion);

  return (
    <Box>
      <div className="App">
        <header className="App-header">
          <h1>Are you happy at this moment?</h1>
        </header>
        {questionNumber === 4 ? (
          <div
            style={{
              height: '70vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>You are {0} % happy</h1>
            <p>inner - {innerHStore}</p>
            <p>outer - {outerHStore}</p>
            <Button variant="outlined" onClick={() => dispatch(refreshQuiz())}>
              Try again
            </Button>
          </div>
        ) : questionNumber === -1 ? (
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
                My inside world
                <h1
                  style={{
                    color: 'rgb(25 117 207)',
                  }}
                >
                  {innerH}
                </h1>
                <p>My inner happiness</p>
              </div>
              <Slider
                defaultValue={5}
                sx={{ width: '50%' }}
                marks
                min={0}
                max={10}
                value={innerH}
                onChange={handleChange}
              />
              <div
                style={{
                  width: '10%',
                  padding: 10,
                }}
              >
                My clousest
                <h1
                  style={{
                    color: 'rgb(166 201 236)',
                  }}
                >
                  {outerH}
                </h1>
                <p>My outer happiness</p>
              </div>
            </Box>
            <Button variant="outlined" onClick={handleSubmit}>
              Next question
            </Button>
          </Box>
        ) : (
          <QuestionForm
            handleFormSubmit={handleFormSubmit}
            questions={questions}
            question={question}
          />
        )}
      </div>
    </Box>
  );
}

function QuestionForm(props) {
  const happyData = useSelector(selectHappyData);
  const questionNumber = useSelector(selectedQuestion);
  const dispatch = useDispatch();
  const [selectOption, setSelectOption] = useState(0);

  const { handleFormSubmit, questions, question } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <h2>{happyData[questionNumber].text}</h2>
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
          dispatch(changeResult(Number(selectOption)));
        }}
      >
        Next question
      </Button>
      <p>this is {happyData.map((a) => a.result)}</p>
    </Box>
  );
}

export default App;

// function App() {
//   const happyCount = useSelector(selectHappyCount);
//   const dispatch = useDispatch();

//   const [questions, setQuestions] = useState(questionsData);
//   const [question, setQuestion] = useState(-1);
//   const [selectedOption, setSelectedOption] = useState(0);

//   const [insideH, setInsideH] = useState(5);
//   const [outsideH, setOutsideH] = useState(5);

//   const handleOptionChange = (changeEvent) => {
//     setSelectedOption(changeEvent.target.value);
//   };

//   const handleChange = (event, newValue) => {
//     setInsideH(newValue);
//     setOutsideH(10 - newValue);
//   };

//   const result =
//     ((questions[0].result +
//       questions[1].result +
//       questions[2].result +
//       questions[3].result) /
//       4) *
//     100;

//   const insideHOnly =
//     (questions[1].result + questions[2].result + questions[3].result) / 3;
//   const outsideHOnly = questions[0].result / 1;
//   const newResult = Math.round(
//     ((insideH / 10) * insideHOnly + (outsideH / 10) * outsideHOnly) * 100
//   );

//   return question === 4 ? (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <h1>You are {newResult} % happy</h1>
//       <Button variant="outlined" onClick={refreshQuiz}>
//         Try again
//       </Button>
//     </div>
//   ) : question === -1 ? (
//     <div className="App">
//       <header className="App-header">
//         <h1>Are you happy at this moment?</h1>
//       </header>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: '30px',
//         }}
//       >
//         <h2>How your happiness deppends on?</h2>
//         <Box
//           sx={{
//             display: 'flex',
//             width: '100%',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: '20px',
//           }}
//         >
//           <div
//             style={{
//               width: '10%',
//               padding: 10,
//             }}
//           >
//             My inner world
//             <p>{insideH}</p>
//           </div>
//           <Slider
//             defaultValue={5}
//             sx={{ width: '50%' }}
//             value={insideH}
//             onChange={handleChange}
//             marks
//             min={0}
//             max={10}
//           />
//           <div
//             style={{
//               width: '10%',
//               padding: 10,
//             }}
//           >
//             My clousest
//             <p>{outsideH}</p>
//           </div>
//         </Box>
//         <Button variant="outlined" onClick={handleFormSubmit}>
//           Next question
//         </Button>
//       </Box>
//       <h2>{happyCount[0].id}</h2>
//     </div>
//   ) : (
//     <QuestionForm
//       handleFormSubmit={handleFormSubmit}
//       questions={questions}
//       handleOptionChange={handleOptionChange}
//       question={question}
//       selectedOption={selectedOption}
//     />
//   );
// }

// function QuestionForm(props) {
//   const {
//     handleFormSubmit,
//     questions,
//     handleOptionChange,
//     question,
//     selectedOption,
//   } = props;

//   const happyCount = useSelector(selectHappyCount);

//   return (
//     <div className="">
//       <header className="App-header">
//         <h1>Are you happy at this moment?</h1>
//       </header>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: '20px',
//         }}
//       >
//         <h2>{questions[question].text}</h2>
//         <FormControl>
//           <FormLabel id="label">Choose the answer</FormLabel>
//           <RadioGroup
//             aria-labelledby="demo-radio-buttons-group-label"
//             name="radio-buttons-group"
//           >
//             <FormControlLabel
//               value="1"
//               control={<Radio size="medium" />}
//               label="Yes"
//               onChange={handleOptionChange}
//               checked={selectedOption === '1'}
//             />
//             <FormControlLabel
//               value="0"
//               control={<Radio size="medium" />}
//               label="No"
//               onChange={handleOptionChange}
//               checked={selectedOption === '0'}
//             />
//           </RadioGroup>
//         </FormControl>
//         <Button variant="outlined" onClick={handleFormSubmit}>
//           Next question
//         </Button>
//       </Box>
//     </div>
//   );
// }

// export default App;
