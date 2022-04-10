import { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectHappyData,
  selectedQuestion,
  changeResult,
} from '../happyCounter/happyCounterSlice';

export function QuestionForm(props) {
  const happyData = useSelector(selectHappyData);
  const questionNumber = useSelector(selectedQuestion);
  const dispatch = useDispatch();

  const [selectOption, setSelectOption] = useState(0);

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

export default QuestionForm;
