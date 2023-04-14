import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, current, logOut } from './operations';

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '', avatar: '' },

    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    loginWithGoogle(state, { payload }) {
      state.token = payload;
      state.isLoggedIn = true;
    },
  },
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [current.pending](state) {
      state.isRefreshing = true;
    },
    [current.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [current.rejected](state) {
      state.isRefreshing = false;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginWithGoogle } = authSlice.actions;

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
