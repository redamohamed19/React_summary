import { createSlice } from '@reduxjs/toolkit';
import { Istate, Iaction } from '../interface';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 200
  },
  reducers: {
    increment: (state: Istate) => {
      state.value += 1;
    },
    multipe: (state: Istate) => {
      state.value = state.value * 1501;
    },
    decrement: (state: Istate) => {
      state.value -= 1;
    },
    incrementByAmount: (state: Istate, action: Iaction) => {
      state.value += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  multipe
} = counterSlice.actions;

export default counterSlice.reducer;
