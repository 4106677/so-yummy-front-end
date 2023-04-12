import { createSlice } from '@reduxjs/toolkit';
import {
  getMainCategories,
  getPopularRecipes,
  getCategoryList,
  getRecipesByQuery,
  getAllRecipesByCategory,
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
    recipesByQuery: [],
    recipesOfCategory: [],
    isError: false,
    loadingRecipesOfCategory: false,
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
        state.recipesByQuery = [];
        state.recipesByQuery.length = 0;
      })
      .addCase(getAllRecipesByCategory.fulfilled, (state, { payload }) => {
        state.recipesOfCategory = payload;
        state.isCategoryFetching = false;
      })
      .addCase(getAllRecipesByCategory.pending, pending)
      .addCase(getAllRecipesByCategory.rejected, rejected),
});




export const mainRecipeReduser = outerRecipesSlice.reducer;