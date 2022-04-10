import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Slider, Box, Button } from '@mui/material';

import {
  refreshQuiz,
  changeInnerOuter,
} from '../happyCounter/happyCounterSlice';

export function Start() {
  const dispatch = useDispatch();

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
  );
}
