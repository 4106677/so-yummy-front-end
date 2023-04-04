import { createSlice } from '@reduxjs/toolkit';
import { getMainCategories } from './operations';

const handleRequest = state => {
  state.isLoading = true;
};

const handleSuccess = state => {
  state.isLoading = false;
  state.error = null;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const MainRecipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    categories: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getMainCategories.pending](state) {
      handleRequest(state);
    },
    [getMainCategories.fulfilled](state, action) {
      state.items = action.payload;
      handleSuccess(state, action);
    },
    [getMainCategories.rejected](state, action) {
      handleError(state, action);
    },
  },
});




export const mainRecipeReduser = MainRecipeSlice.reducer;