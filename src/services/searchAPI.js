import axios from 'axios';

const recipesSearchInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});

/*export const getAllRecipesSearch = search => {
    return recipesSearchInstance.get('/recipes/search/', { params: { search } });
};*/

export const getAllRecipesSearch = async () => {
    const { data } = await recipesSearchInstance.get('/recipes/search/cider?type=title&pages=1&limit=12');
    console.log(data);
    return data;
};
