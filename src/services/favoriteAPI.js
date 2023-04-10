import axios from 'axios';

const favoriteInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhMDNiYzI1OGYzMDE2NWZkODI1ZCIsImlhdCI6MTY4MDk3NDg3MywiZXhwIjoxNjgxMDYxMjczfQ.Pqa2tYKlB0sNFUReNacqLVu6WAd488bf2lvxk-OPrhM',
  },
});

export const addToFavoriteList = async () => {
  const data = await favoriteInstance.post(`/favorite`);
  return data;
};

export const getAllFavoriteList = async () => {
  const response = await favoriteInstance.get(`/favorite`);
  const data = response.data;
  console.log(data);
  return data;
};

export const deleteFavoriteList = async(_id) => {
  const data = await favoriteInstance.delete(`/favorite/${_id}`);
  console.log(data);
  return data;
};
