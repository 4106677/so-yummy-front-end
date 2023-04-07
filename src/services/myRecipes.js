import axios from 'axios';

const getToken = () => {
  const serializedState = localStorage.getItem('persist:auth');
  const serializedStateParse =
    serializedState === null ? undefined : JSON.parse(serializedState);
  return serializedStateParse.token;
};
// axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

const MyRecipesBase = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM2NDAwMTBjNWU1MjY2MzZlYWNlNiIsImlhdCI6MTY4MDg5ODk0MSwiZXhwIjoxNjgwOTg1MzQxfQ.17cYMAwQxlr8LuL8O6LRFsHIm1qdMGep37grJhHtsgg',
  },
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
