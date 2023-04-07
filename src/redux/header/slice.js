import { createSlice } from '@reduxjs/toolkit';
import { updateUser } from './operations';

export const updateUserSlice = createSlice({
  name: 'update',
  initialState: {
    isSuccess: false,
    isError: false,
    isLoading: false
  },
  extraReducers: builder => {
    builder
      .addCase(updateUser.fulfilled, (state) => {
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(updateUserSlice.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isSuccess = false;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const updateUserReducer = updateUserSlice.reducer;
