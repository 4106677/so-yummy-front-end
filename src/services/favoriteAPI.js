import axios from 'axios';

// const getToken = () => {
//   const serializedState = localStorage.getItem('persist:auth');
//   const serializedStateParse =
//     serializedState === null ? undefined : JSON.parse(serializedState);
//   return `Bearer ${serializedStateParse.token.slice(1, -1)}`;
// };
import { setToken } from '../redux/auth/operations';

const { REACT_APP_API_URL } = 'https://recipes-becend-49lg.onrender.com/';

const favoriteInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    // Authorization: getToken(),
    Authorization: setToken(),
  },
});

export const addToFavoriteList = async data => {
  const response = await favoriteInstance.post(`/favorite`, data);
  return response.data;
};

export const getAllFavoriteList = async () => {
  const data = await favoriteInstance.get(`/favorite`);
  console.log(data);
  return data;
};

export const deleteFavoriteList = async _id => {
  const data = await favoriteInstance.delete(`/favorite/${_id}`);
  console.log(data);
  return data;
};
