import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectMyHappiness,
  refreshQuiz,
  selectLanguage,
} from '../happyCounter/happyCounterSlice';

export function Result() {
  const happiness = useSelector(selectMyHappiness);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {language === 'En' ? (
        <h1>You are {happiness} % happy</h1>
      ) : (
        <h1>Ви на {happiness} % щасливі</h1>
      )}
      <Button variant="outlined" onClick={() => dispatch(refreshQuiz())}>
        {language === 'En' ? 'Try again' : 'Спробувати ще раз'}
      </Button>
    </div>
  );
}

export default Result;
