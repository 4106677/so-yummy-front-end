import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/shoppingListAPI';

export const fetchShoppingList = createAsyncThunk(
  'shoppingList/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllShoppingList();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

export const addShoppingList = createAsyncThunk(
  'shoppingList/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addToShoppingList(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const deleteShoppingList = createAsyncThunk(
  'shoppingList/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteShoppingList(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
