import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserAPI } from 'services/userUpdateAPI';

export const updateUser = createAsyncThunk(
  '/auth/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const result = await updateUserAPI(data);
      return result;
    } catch ( err ) {
      return rejectWithValue(err.message);
    }
  }
);

