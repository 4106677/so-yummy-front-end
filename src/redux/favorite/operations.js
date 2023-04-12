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
      await api.addToFavoriteList(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteRecipe = createAsyncThunk(
  'favorite/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteFavoriteList(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);