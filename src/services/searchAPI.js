import axios from 'axios';

const recipesSearchInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});

 export const getAllRecipesSearch = async () => {
    const { data } = await recipesSearchInstance.get(
      `/recipes/search/beef?type=title&pages=1&limit=6`
    );
  console.log(data);
  return data;
}; 

