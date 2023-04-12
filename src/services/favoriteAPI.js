import axios from 'axios';

const getToken = () => {
  let serializedState = localStorage.getItem('persist:auth');
  const serializedStateParse =
    serializedState === null ? undefined : JSON.parse(serializedState);
  return `Bearer ${serializedStateParse.token.slice(1, -1)}`;
};

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
