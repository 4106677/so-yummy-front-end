import axios from 'axios';

const recipesSearchInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});

export const getAllRecipesSearch = async (search, searchType) => {
  try {
    const  data  = await recipesSearchInstance.get(
      `/recipes/search/${search}?type=${searchType}&pages=1&limit=6`
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
}; 

