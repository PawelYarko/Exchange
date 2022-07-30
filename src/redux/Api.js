import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const myHeaders = {'apikey': '72DRod1oCD1ZsfjUpNzZz1bvXPryngx0'};

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
 
export const fetch = createAsyncThunk(
    'exchange/fetch',
    async function ({to, from, toAmount}, { rejectWithValue }) {
      try {
        const response = await axios.get(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${toAmount}`, requestOptions);
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