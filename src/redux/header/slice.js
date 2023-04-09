import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './operations';


const initialState = {
    isSuccess: false,
    isLoading: false
}
  

export const updateSlice = createSlice({
  name: 'update',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, state => {
        state.isSuccess = true;
        state.isLoading = false;
      });
  },
});



export const updateReducer = updateSlice.reducer;
