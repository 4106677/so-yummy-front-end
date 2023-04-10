import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './operations';
import { current } from 'redux/auth/operations';


const initialState = {
  isSuccess: false,
  isLoading: false,
  error: false
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
      })
      .addCase(updateUser.rejected, state => {
        state.error = true;
        state.isLoading = false;
      })
      .addCase(current.fulfilled, state => {
        state.isSuccess = false;
        state.error = false;
    })
  },
});



export const updateReducer = updateSlice.reducer;
