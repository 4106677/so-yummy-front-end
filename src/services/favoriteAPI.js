import axios from 'axios';
import { getToken } from './getToken';
const favoriteInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization: getToken(),
  },
});

export const addToFavoriteList = async id => {
  const data = await favoriteInstance.post(`/recipes/byIdToFavorite/${id}`);
  return data;
};

export const getAllFavoriteList = async () => {
  const data = await favoriteInstance.get(`/favorite`);
  return data;
};

export const deleteFavoriteList = async _id => {
  const data = await favoriteInstance.delete(`/favorite/${_id}`);

  return data;
};
