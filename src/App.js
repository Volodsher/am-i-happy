import './App.css';
import { Box } from '@mui/material';

import { useSelector } from 'react-redux';
import { selectedQuestion } from './app/features/happyCounter/happyCounterSlice';

import { Result } from './app/features/Result/Result';
import { QuestionForm } from './app/features/QuestionForm/QuestionForm';
import { Start } from './app/features/Start/Start';

function App() {
  const questionNumber = useSelector(selectedQuestion);

  return (
    <Box>
      <div className="App">
        <header className="App-header">
          <h1>Are you happy at this moment?</h1>
        </header>
        {questionNumber === 4 ? (
          <Result />
        ) : questionNumber === -1 ? (
          <Start />
        ) : (
          <QuestionForm />
        )}
      </div>
    </Box>
  );
}

export default App;
