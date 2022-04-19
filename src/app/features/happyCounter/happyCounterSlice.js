import { createSlice } from '@reduxjs/toolkit';

const questionsData1 = [
  {
    id: 0,
    textEn: 'Are your clousest onces Ok?',
    textUa: 'З вашими найблищими все гаразд?',
    result: 0,
  },
  {
    id: 1,
    textEn: 'Do you do what you have to do?',
    // textUa: 'Ви робити те що потрібно?',
    textUa: 'Те, що ви зараз робите, це те що потрібно робити?',
    result: 0,
  },
  {
    id: 2,
    textEn: 'Do you do what you can do?',
    textUa:
      'Ви можете робити те, що ви зараз намагаєтеся робити? Ви можете робити те що вам треба/хочете робити?',
    result: 0,
  },
  {
    id: 3,
    textEn: 'Do you really do what you whant to do?',
    textUa: 'Те, що ви зараз робите, це те що ви дійсно хочите робити?',
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
    myHappiness: 0,
    language: 'En',
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

      if (state.question === 4) {
        const innerHOnly =
          (state.value[1].result +
            state.value[2].result +
            state.value[3].result) /
          3;
        const outerHOnly = state.value[0].result / 1;
        state.myHappiness = Math.round(
          ((state.innerHappiness / 10) * innerHOnly +
            (state.outerHappiness / 10) * outerHOnly) *
            100
        );
      }
    },
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeResult, refreshQuiz, changeInnerOuter, changeLanguage } =
  happyCounterSlice.actions;

export const selectHappyData = (state) => state.happyCounter.value;
export const selectedQuestion = (state) => state.happyCounter.question;
export const selectInnerHappiness = (state) =>
  state.happyCounter.innerHappiness;
export const selectOuterHappiness = (state) =>
  state.happyCounter.outerHappiness;
export const selectMyHappiness = (state) => state.happyCounter.myHappiness;
export const selectLanguage = (state) => state.happyCounter.language;

export default happyCounterSlice.reducer;
