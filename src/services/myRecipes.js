import axios from 'axios';

import { getToken } from './getToken';

const MyRecipesBase = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization: getToken(),
  },
});
export const getAllRecipesSearch = async () => {
  const { data } = await MyRecipesBase.get(
    `/recipes/ownRecipes/getRecipes?type=title&pages=1&limit=4`
  );

  return data;
};

export const DeleteMyRecipeById = async id => {
  const { data } = await MyRecipesBase.delete(
    `/recipes/ownRecipes/removeRecipe/${id}`
  );

  return data;
};
