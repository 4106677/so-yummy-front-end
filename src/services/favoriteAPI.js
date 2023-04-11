import axios from 'axios';

const favoriteInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzNjZDJjZmVkZDA0MWJiYjhkNzU1ZSIsImlhdCI6MTY4MTEzOTg5MCwiZXhwIjoxNjgxMjI2MjkwfQ.bkHhLIWZq2ba4QEZbaGDGV53slti0lXMWXFUsX9UqG4',
  },
});

export const addToFavoriteList = async (data) => {
  const response = await favoriteInstance.post(`/favorite`, data);
  return response.data;
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
