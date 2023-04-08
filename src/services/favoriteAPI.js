import axios from 'axios';

const favoriteInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVhYzYyYjUyMGQwNThiMzkwZWI5OSIsImlhdCI6MTY4MDg4NDUwNSwiZXhwIjoxNjgwOTcwOTA1fQ.7hB4_WLpC9opXocHO3iDzRJzR-izbrR8jW0od3dmPZU',
  },
});

export const addToFavoriteList = async () => {
  const data = await favoriteInstance.post(`/favorite`);
  return data;
};

export const getAllFavoriteList = async () => {
  const response = await favoriteInstance.get('/favorite');
  const data = response.data;
  console.log(data);
  return data;
};

export const deleteFavoriteList = async() => {
  const data = await favoriteInstance.delete(`/favorite`);
  console.log(data);
  return data;
};
