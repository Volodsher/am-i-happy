import { createSlice } from '@reduxjs/toolkit';

const questionsData1 = [
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

export const happyCounterSlice = createSlice({
  name: 'happyCounter',
  initialState: {
    value: questionsData1,
    question: -1,
    innerHappiness: 0,
    outerHappiness: 0,
  },
  reducers: {
    refreshQuiz: (state) => {
      state.question === 4 ? (state.question = -1) : (state.question += 1);
    },
    changeInnerOuter: (state, action) => {
      state.innerHappiness = action.payload[0];
      state.outerHappiness = action.payload[1];
    },
    changeResult: (state, action) => {
      state.value[state.question].result = action.payload;
      state.question += 1;
    },
  },
});

// export const { changeResult } = happyCounterSlice.actions;

export const { changeResult, refreshQuiz, changeInnerOuter } =
  happyCounterSlice.actions;

export const selectHappyData = (state) => state.happyCounter.value;
export const selectedQuestion = (state) => state.happyCounter.question;
export const selectInnerHappiness = (state) =>
  state.happyCounter.innerHappiness;
export const selectOuterHappiness = (state) =>
  state.happyCounter.outerHappiness;

export default happyCounterSlice.reducer;
