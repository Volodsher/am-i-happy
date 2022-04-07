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
    selectedOption: 0,
  },
  reducers: {},
});

// export const { changeResult } = happyCounterSlice.actions;

export const selectHappyData = (state) => state.happyCounter.value;

export default happyCounterSlice.reducer;
