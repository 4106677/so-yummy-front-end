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
  'shoppingList/addShoppingList',
  async (data, { rejectWithValue }) => {
    try {
      await api.addShoppingList(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
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
