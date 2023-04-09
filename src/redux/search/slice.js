import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getRecipesByQueryTitle,
} from './operations';

const initialState = {
        searchText: '',
        isLoading: false,
        error: null
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRecipesByQueryTitle.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRecipesByQueryTitle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.searchText = payload;
      })
      .addCase(getRecipesByQueryTitle.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});
      
export const {setSearchText} = searchSlice.reducer;

const persistConfig = {
    key: 'search',
    storage,
};

export const persistedSearch = persistReducer(persistConfig, searchSlice.reducer);