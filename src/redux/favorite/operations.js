import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/favoriteAPI";

export const fetchFavoriteRecipe = createAsyncThunk(
  'favorites/fetch',
  async (_, thunkAPI) => {
    try {
      const {data} = await api.getAllFavoriteList();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addFavoriteRecipe = createAsyncThunk(
  'favorites/add',
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
  'favorites/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteFavoriteList(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);