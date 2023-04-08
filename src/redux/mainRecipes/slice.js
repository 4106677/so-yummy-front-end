import { createSlice } from '@reduxjs/toolkit';
import {
  getMainCategories,
  getPopularRecipes,
  getCategoryList,
  getRecipesByQuery,
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
    popularRecipes: [],
    categoryList: [],
    recipesByQuery: {
      meals: [],
      totalHits: 0,
    },
    isError: false,
  },

  extraReducers: builder =>
    builder

      .addCase(getMainCategories.fulfilled, (state, { payload }) => {
        state.mainCategories = payload;
        state.isCategoryFetching = false;
      })

      .addCase(getMainCategories.pending, pending)

      .addCase(getMainCategories.rejected, rejected)

      .addCase(getPopularRecipes.fulfilled, (state, { payload }) => {
        state.popularRecipes = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getPopularRecipes.pending, pending)
      .addCase(getPopularRecipes.rejected, rejected)

      .addCase(getCategoryList.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getRecipesByQuery.fulfilled, (state, { payload }) => {
        state.recipesByQuery.meals = payload.meals;
        state.recipesByQuery.totalHits = payload.totalHits;
        state.isCategoryFetching = false;
        state.isError = false;
      })
      .addCase(getRecipesByQuery.pending, pending)
      .addCase(getRecipesByQuery.rejected, state => {
        state.isCategoryFetching = false;
        state.isError = true;
        state.recipesByQuery.meals = [];
        state.recipesByQuery.totalHits = 0;
      })
});




export const mainRecipeReduser = outerRecipesSlice.reducer;