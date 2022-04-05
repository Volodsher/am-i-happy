import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import happyCounterReducer from '../features/happyCounter/happyCounterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    happyCounter: happyCounterReducer,
  },
});
