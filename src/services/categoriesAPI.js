import axios from 'axios';

export const categoriesInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});
