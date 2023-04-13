import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteRecipe,
  fetchFavoriteRecipe,
  deleteFavoriteRecipe,
} from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchFavoriteRecipe.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteRecipe.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.favorite = payload;
      })
      .addCase(fetchFavoriteRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addFavoriteRecipe.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFavoriteRecipe.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.favorite.push(payload);
      })
      .addCase(addFavoriteRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteFavoriteRecipe.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFavoriteRecipe.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.favorite = state.favorite.filter(({ _id }) => _id !== payload);
      })
      .addCase(deleteFavoriteRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

const persistConfig = {
  key: 'favorite',
  storage,
};

export const persistedFavorites = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
