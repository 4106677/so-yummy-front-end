import axios from 'axios';

const MyRecipesBase = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmM2NDAwMTBjNWU1MjY2MzZlYWNlNiIsImlhdCI6MTY4MDY0MDEyMiwiZXhwIjoxNjgwNzI2NTIyfQ.rQbSxN4P3P8xqUmsTTSeuv-_8ItDfFajBprHAxQqTr0',
  },
});

export const GetAllMayRecipes = async () => {
  const { data } = await MyRecipesBase.get(
    '/recipes/ownRecipes/getRecipes?type=title&pages=1&limit=5'
  );
  console.log(data.result);
  return data.result;
};

export const DeleteMyRecipeById = async id => {
  const { data } = await MyRecipesBase.delete(
    `/recipes/ownRecipes/removeRecipe/:${id}`
  );
  console.log(data);
  return data;
};
