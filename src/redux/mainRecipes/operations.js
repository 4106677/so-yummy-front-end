import { createAsyncThunk } from '@reduxjs/toolkit';

import {getSetOfCategoriestAPI} from '../../services/TheMealAPI';



export const getMainCategories = createAsyncThunk(
  'outerRecipes/mainCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getSetOfCategoriestAPI();
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);




