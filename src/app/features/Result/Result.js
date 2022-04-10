import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMyHappiness,
  refreshQuiz,
} from '../happyCounter/happyCounterSlice';

export function Result() {
  const happiness = useSelector(selectMyHappiness);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>You are {happiness} % happy</h1>
      <Button variant="outlined" onClick={() => dispatch(refreshQuiz())}>
        Try again
      </Button>
    </div>
  );
}

export default Result;
