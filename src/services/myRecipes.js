import axios from 'axios';
// import { setToken } from 'redux/auth/operations';

const getToken = () => {
  let serializedState = localStorage.getItem('persist:auth');
  const serializedStateParse =
    serializedState === null ? undefined : JSON.parse(serializedState);
  return `Bearer ${serializedStateParse.token.slice(1, -1)}`;
};
console.log(getToken());
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
