import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getSetOfCategoriestAPI,
  getCategoryListAPI,
  getAllRecipesByCategoryAPI,
  getLimitedRecipesByCategoryAPI,
  getOneRecipeByIdAPI,
  getPopularRecipesAPI,
  getRecipesByQueryAPI,
  getRecipesByIngredientAPI,
} from '../../services/TheMealAPI';



export const getMainCategories = createAsyncThunk(
  'outerRecipes/mainCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getSetOfCategoriestAPI();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCategoryList = createAsyncThunk(
  'outerRecipes/categoryList',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategoryListAPI();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getAllRecipesByCategory = createAsyncThunk(
  'outerRecipes/allRecipes',
  async (category, { rejectWithValue }) => {
    try {
      const data = await getAllRecipesByCategoryAPI(category);
      
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getLimitedRecipesByCategory = createAsyncThunk(
  'outerRecipes/limitedRecipes',
  async (params, { rejectWithValue }) => {
    try {
      const { category, limit } = params;
      const data = await getLimitedRecipesByCategoryAPI(category, limit);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getOneRecipeById = createAsyncThunk(
  'outerRecipes/recipe',
  async (id, { rejectWithValue }) => {
    try {
      const data = await getOneRecipeByIdAPI(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getPopularRecipes = createAsyncThunk(
  'outerRecipes/popular',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getPopularRecipesAPI();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByQuery = createAsyncThunk(
  'outerRecipes/recipesByQuery',
  async (params, { rejectWithValue }) => {
    try {
      const { query, page, per_page } = params;
      const data = await getRecipesByQueryAPI(query, page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getRecipesByIngredient = createAsyncThunk(
  'ingredients/recipes',
  async (params, { rejectWithValue }) => {
    try {
      const { ingredient, page, per_page } = params;
      const data = await getRecipesByIngredientAPI(ingredient, page, per_page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);


