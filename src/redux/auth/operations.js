import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://recipes-becend-49lg.onrender.com/';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', user);
      toast.success(`Welcome, ${data.user.name}!`);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400 || error.response) {
        toast.error(`Sorry, something went wrong there. Try again.`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', user);
      toast.success(`Welcome back, ${data.user.name}!`);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400 || error.response) {
        toast.error(`Sorry, something went wrong there. Try again.`);
      }
      if (error.response.status === 401) {
        toast.error(
          `Incorrect email or password. Please try againe to sign in.`
        );
      }
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const { auth } = thunkAPI.getState();
  const token = auth.token;
  if (!token) return thunkAPI.rejectWithValue();
  setAuthHeader(token);
  try {
    const { data } = await axios.get('/auth/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
    toast.success('You have been successfully logged out!');
  } catch (e) {
    toast.warn('You have been logged out! Please log back in.');
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;
  if (!token) return thunkAPI.rejectWithValue('No available token');

  try {
    setAuthHeader(token);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
