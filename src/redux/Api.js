import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const myHeaders = {'apikey': 'JJU10lLyT1oUUr30UOu8bBFoI8PnHa0o'};

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
 
export const fetch = createAsyncThunk(
    'exchange/fetch',
    async function ({to, from, amount}, { rejectWithValue }) {
      try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions);
        const data = await response.data;
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  const exchangeSlice = createSlice({
      name: 'exchange',
      initialState: [],
      
      extraReducers:{
        [fetch.fulfilled]:(_state,action) => {
            return action.payload;
        }
      }
  })

  export default exchangeSlice.reducer;