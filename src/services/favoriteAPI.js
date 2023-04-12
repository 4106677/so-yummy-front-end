import axios from 'axios';
import { getToken } from './getToken';
const favoriteInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization: getToken(),
  },
});

export const addToFavoriteList = async id => {
  await favoriteInstance.post(`/recipes/byIdToFavorite/${id}`);
  // const response = await favoriteInstance.post(`/recipes/byIdToFavorite/${id}`);
  // console.log(response);
  // return response.data;
};

export const getAllFavoriteList = async () => {
  const data = await favoriteInstance.get(`/favorite`);
  return data;
};

export const deleteFavoriteList = async _id => {
  const data = await favoriteInstance.delete(`/favorite/${_id}`);
  console.log(data);
  return data;
};
