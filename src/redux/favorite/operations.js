import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/favoriteAPI";

export const fetchFavoriteRecipe = createAsyncThunk(
  'favorite/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllFavoriteList();
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  'favorite/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addToFavoriteList(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
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