import axios from 'axios';

axios.defaults.baseURL =
  'https://recipes-becend-49lg.onrender.com';

export const getSetOfCategoriestAPI = () => {
  return axios.get('/recipes/main-page').then(({ data }) => {
    console.log(data)
    return data;
  });
};

export const getCategoryListAPI = () => {
  return axios.get('/recipes/category-list ').then(({ data }) => {
    return data;
  });
};

export const getAllRecipesByCategoryAPI = category => {
  return axios.get(`/recipes/byCategory/${category}`).then(({ data }) => {
    return data;
  });
};

export const getLimitedRecipesByCategoryAPI = (category, limit) => {
  return axios.get(`/recipes/${category}/${limit}`).then(({ data }) => {
    return data;
  });
};

export const getOneRecipeByIdAPI = id => {
  return axios.get(`/recipes/byId/${id}`).then(({ data }) => {
    return data;
  });
};

export const getPopularRecipesAPI = () => {
  return axios.get('/recipes/popular').then(({ data }) => {
    return data;
  });
};

export const getRecipesByQueryAPI = (query, page = 1, per_page = 12) => {
  return axios
    .get(`/recipes/search/${query}?page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      return data;
    });
};

export const getAllIngredientsAPI = () => {
  return axios.get('/ingredients/list').then(({ data }) => {
    return data;
  });
};

export const getRecipesByIngredientAPI = (
  ingredient,
  page = 1,
  per_page = 12
) => {
  return axios
    .get(`/ingredients/${ingredient}?page=${page}&per_page=${per_page}`)
    .then(({ data }) => {
      return data;
    });
};
