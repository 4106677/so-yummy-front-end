import axios from 'axios';
// import { setToken } from 'redux/auth/operations';

import { getToken } from './getToken';

const MyRecipesBase = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization: getToken(),
  },
});
export const getAllRecipesSearch = async () => {
  const { data } = await MyRecipesBase.get(
    `/recipes/ownRecipes/getRecipes?type=title&pages=1&limit=6`
  );
  console.log(data);
  return data;
};

export const DeleteMyRecipeById = async id => {
  const { data } = await MyRecipesBase.delete(
    `/recipes/ownRecipes/removeRecipe/${id}`
  );
  console.log(data);
  return data;
};
