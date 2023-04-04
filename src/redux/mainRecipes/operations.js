import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';


axios.defaults.baseURL = 'https://recipes-becend-49lg.onrender.com';

export const getRecipesByCategoryAPI = category => {
  return axios
    .get(`/recipes/main-page/${category}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getMainCategories = createAsyncThunk(
  'main/fetchRecipe',
  async (_, thunkAPI) => {
    try {
      const breakfast = await getRecipesByCategoryAPI('breakfast');
      const miscellaneous = await getRecipesByCategoryAPI('miscellaneous');
      const vegan = await getRecipesByCategoryAPI('vegan');
      const desserts = await getRecipesByCategoryAPI('dessert');

      const data = {
        breakfast,
        miscellaneous,
        vegan,
        desserts,
      };
      console.log('main recipes', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);