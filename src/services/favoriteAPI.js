import axios from 'axios';

const favoriteInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVhYzYyYjUyMGQwNThiMzkwZWI5OSIsImlhdCI6MTY4MDk3Mzc1MCwiZXhwIjoxNjgxMDYwMTUwfQ.yBK0ehdYS6ieY38IUfH03ngF_mNt2MF_AAZj6G5XvtE',
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

export const deleteFavoriteList = async(id) => {
  const data = await favoriteInstance.delete(`/favorite/${id}`);
  console.log(data);
  return data;
};
