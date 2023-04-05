import axios from 'axios';

const recipesSearchInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});

export const getAllRecipesSearch = async (search, searchType, page) => {
  try {
    const  response  = await recipesSearchInstance.get(
      `/recipes/search/${search}?type=${searchType}&pages${page}1&limit=6`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
}; 

