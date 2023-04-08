import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllRecipesSearchTitle, getAllRecipesSearchIngredients } from 'services/searchAPI';

 export const getRecipesByQueryTitle = createAsyncThunk(
   'search/getRecipesByQueryTitle',
   async (params, { rejectWithValue }) => {
     try {
       const { query, page, limit } = params;
       const data = await getAllRecipesSearchTitle(query, page, limit);
       return data;
     } catch (error) {
       return rejectWithValue(error.message);
     }
   }
 );

export const getRecipesByQueryIngredient = createAsyncThunk(
  'search/recipesByIngredients',
  async (params, { rejectWithValue }) => {
    try {
      const { query, page, limit } = params;
      const data = await getAllRecipesSearchIngredients(query, page, limit);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);
