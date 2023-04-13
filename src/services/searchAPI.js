import axios from 'axios';


const recipesSearchInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});

export const getAllRecipesSearchTitle = async (search, page, limit) => {
  try {
    const  response  = await recipesSearchInstance.get(
      `/recipes/search/${search}?type=title&pages${page}&limit=${limit}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}; 

export const getAllRecipesSearchIngredients = async (search, page, limit) => {
  try {
    const response = await recipesSearchInstance.get(
      `/recipes/search/${search}?type=ingredients&pages${page}&limit=${limit}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllRecipesFromMain = async (searchFromMain, page, limit) => {
  try {
    const response = await recipesSearchInstance.get(
      `/recipes/search/${searchFromMain}??type=title&pages${page}&limit=${limit}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}; 