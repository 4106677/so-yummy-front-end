import { createSlice } from '@reduxjs/toolkit';
import {
  getMainCategories,
  
} from './operations';



const pending = state => {
  state.isCategoryFetching = true;
};
const rejected = state => {
  state.isCategoryFetching = false;
};


export const outerRecipesSlice = createSlice({
  name: 'outerRecipes',
  initialState: {
  isCategoryFetching: false,
  mainCategories: [],
  isError: false,
},

  extraReducers: builder =>
    builder
      
      .addCase(getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories= payload;
        state.isCategoryFetching = false;
      })
      
      
      .addCase(getMainCategories.pending, pending)
      

      .addCase(getMainCategories.rejected, rejected)
      
      
});




export const mainRecipeReduser = outerRecipesSlice.reducer;