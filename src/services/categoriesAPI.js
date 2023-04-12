import axios from 'axios';

export const categoriesInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});

// export const getAllCategoryListAPI = async () => {
//   const response = await categoriesInstance.get(`/recipes/category-list`);
//   const data = response.data;
//   console.log(data);
//   return data;
// };

// export const getRecipesByCategory = async () => {
//   const response = await categoriesInstance.get(
//     `/recipes/byCategory/:category`
//   );
//   const data = response.data;
//   console.log(data);
//   return data;
// };
