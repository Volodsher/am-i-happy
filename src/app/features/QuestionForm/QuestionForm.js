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
  selectLanguage,
} from '../happyCounter/happyCounterSlice';

export function QuestionForm(props) {
  const happyData = useSelector(selectHappyData);
  const questionNumber = useSelector(selectedQuestion);
  const language = useSelector(selectLanguage);
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
      <h2>{happyData[questionNumber][`text${language}`]}</h2>
      <FormControl>
        <FormLabel id="label">
          {language === 'En' ? 'Choose the answer' : 'Виберіть відповідь'}
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="1"
            control={<Radio size="medium" />}
            label={language === 'En' ? 'Yes' : 'Так'}
            onChange={(e) => setSelectOption(e.target.value)}
            checked={selectOption === '1'}
          />
          <FormControlLabel
            value="0"
            control={<Radio size="medium" />}
            label={language === 'En' ? 'No' : 'Ні'}
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
        {language === 'En' ? 'Next question' : 'Наступне запитання'}
      </Button>
    </Box>
  );
}

export default QuestionForm;
