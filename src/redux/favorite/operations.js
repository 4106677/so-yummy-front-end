import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/favoriteAPI';

export const fetchFavoriteRecipe = createAsyncThunk(
  'favorite/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllFavoriteList();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  'favorite/addFavoriteRecipe',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.addToFavoriteList(id);
      return data.recipe[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteRecipe = createAsyncThunk(
  'favorite/deleteFavoriteRecipe',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteFavoriteList(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
