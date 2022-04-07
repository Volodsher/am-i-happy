import { configureStore } from '@reduxjs/toolkit';
import happyCounterReducer from './features/happyCounter/happyCounterSlice';

export default configureStore({
  reducer: {
    happyCounter: happyCounterReducer,
  },
});
