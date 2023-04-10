import axios from 'axios';

const getToken = () => {
  const serializedState = localStorage.getItem('persist:auth');
  const serializedStateParse =
    serializedState === null ? undefined : JSON.parse(serializedState);
  const token = 'Bearer ' + serializedStateParse.token;
  return token.replace(/"/g, '');
};
axios.defaults.headers.common.Authorization = getToken();

const MyRecipesBase = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});
export const getAllRecipesSearch = async () => {
  const { data } = await MyRecipesBase.get(
    `/recipes/ownRecipes/getRecipes?type=title&pages=1&limit=6`
  );
  return data;
};

export const DeleteMyRecipeById = async id => {
  const { data } = await MyRecipesBase.delete(
    `/recipes/ownRecipes/removeRecipe/${id}`
  );
  console.log(data);
  return data;
};
