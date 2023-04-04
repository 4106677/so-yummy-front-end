import { configureStore } from '@reduxjs/toolkit';
import { mainRecipeReduser } from './mainRecipes/slice';

export const store = configureStore({
  reducer: {
    recipe: mainRecipeReduser,
  },
});
