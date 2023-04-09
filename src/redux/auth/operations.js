import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://recipes-becend-49lg.onrender.com/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/register', user);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/login', user);

      setToken(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const { auth } = thunkAPI.getState();
  const token = auth.token;
  if (!token) return thunkAPI.rejectWithValue();
  setToken(token);
  try {
    const { data } = await axios.get('/auth/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
