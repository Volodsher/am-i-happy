import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider, Box, Button } from '@mui/material';
import '../../../App.css';

import {
  refreshQuiz,
  changeInnerOuter,
  selectLanguage,
} from '../happyCounter/happyCounterSlice';

export function Start() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
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

  return (
    <Box
      className="start"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      {language === 'En' ? (
        <h2>How your happiness depends on?</h2>
      ) : (
        <h2>Від чого залежить ваше щастя?</h2>
      )}
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '10%',
            padding: 10,
          }}
        >
          {language === 'En' ? 'My inner world' : 'Мій внутрішній світ'}
          <h1
            style={{
              color: 'rgb(25 117 207)',
            }}
          >
            {innerH}
          </h1>
          {language === 'En' ? (
            <p>My inner happiness</p>
          ) : (
            <p>Щастя, яке залежить від мене</p>
          )}
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
          {language === 'En' ? 'My outer world' : 'Мій зовнішній світ'}
          <h1
            style={{
              color: 'rgb(166 201 236)',
            }}
          >
            {outerH}
          </h1>
          {language === 'En' ? (
            <p>My inner happiness</p>
          ) : (
            <p>Благополуччя мого оточення</p>
          )}
        </div>
      </Box>
      <Button variant="outlined" onClick={handleSubmit}>
        {language === 'En' ? 'Next question' : 'Наступне запитання'}
      </Button>
    </Box>
  );
}

export default Start;
