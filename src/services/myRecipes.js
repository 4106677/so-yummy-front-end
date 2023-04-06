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
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM2NDAwMTBjNWU1MjY2MzZlYWNlNiIsImlhdCI6MTY4MDc3ODQ0OSwiZXhwIjoxNjgwODY0ODQ5fQ.R1DsjhK0rFcUtrNFS0mQX2A_LT8rXy0xRNM9dC1tZHM',
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
