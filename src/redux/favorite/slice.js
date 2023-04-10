import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteRecipe,
  fetchFavoriteRecipe,
  deleteFavoriteRecipe,
} from './operations';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
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
        state.favorites = payload;
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
        state.favorites.push(payload);
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
        state.favorites = state.favorites.filter(({ id }) => id !== payload);
      })
      .addCase(deleteFavoriteRecipe.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});


        export const favoriteReducer = favoriteSlice.reducer;
