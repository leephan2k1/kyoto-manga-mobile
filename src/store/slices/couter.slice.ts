import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/store';

const initialState: { value: number } = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTwo: (state) => {
      state.value += 2;
    },
  },
});

export const { addTwo } = counterSlice.actions;

export const selectValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
