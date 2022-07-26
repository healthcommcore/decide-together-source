import { configureStore } from '@reduxjs/toolkit';
import responsesReducer from './state/responsesSlice';

export const store = configureStore({
  reducer: {
    responses: responsesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
