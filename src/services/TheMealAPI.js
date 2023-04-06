import axios from 'axios';

axios.defaults.baseURL =
  'https://recipes-becend-49lg.onrender.com';

export const getSetOfCategoriestAPI = () => {
  return axios.get('/recipes/main-page').then(({ data }) => {
    console.log(data.data);
    return data.data;
  });
};

