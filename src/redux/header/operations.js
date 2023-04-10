import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const getToken = () => {
  const serializedState = localStorage.getItem('persist:auth');
  const serializedStateParse =
    serializedState === null ? undefined : JSON.parse(serializedState);
  return `Bearer ${serializedStateParse.token.slice(1, -1)}`;
};

const { REACT_APP_API_URL } = 'https://recipes-becend-49lg.onrender.com/';

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    Authorization: getToken(),
  },
});

export const updateUser = createAsyncThunk(
  '/auth/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      
     return await instance.patch(`/auth/updateUser`, data);
    } catch (err) {
      toast.error('Something going wrong try again');
      return rejectWithValue(err.message);
    }
  }
);

