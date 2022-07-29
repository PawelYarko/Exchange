import { configureStore } from '@reduxjs/toolkit';
import exchangeSlice from './Api';

const store = configureStore({
  reducer: {
    data: exchangeSlice,
  },
  },);

export default store;