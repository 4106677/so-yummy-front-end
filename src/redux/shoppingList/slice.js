import { createSlice } from '@reduxjs/toolkit';
import {
  addShoppingList,
  fetchShoppingList,
  deleteShoppingList,
} from './operations';
import { toast } from 'react-toastify';

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    shoppingList: [],
    loading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShoppingList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.shoppingList = payload;
      })
      .addCase(fetchShoppingList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addShoppingList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addShoppingList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.shoppingList.push(payload);
        toast.success(`${payload.ttl} added to shopping list!`);
      })
      .addCase(addShoppingList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(deleteShoppingList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteShoppingList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.shoppingList = state.shoppingList.filter(
          ({ id }) => id !== payload
        );
      })
      .addCase(deleteShoppingList.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const shoppingListReducer = shoppingListSlice.reducer;
