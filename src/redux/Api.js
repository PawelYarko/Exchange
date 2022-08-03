import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
 
export const fetch = createAsyncThunk(
    'exchange/fetch',
    async function ({to, from}, { rejectWithValue }) {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/d986c35b178b810600ee8be0/pair/${to}/${from}`);
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
        },
      }
  });

  export default exchangeSlice.reducer;
    
