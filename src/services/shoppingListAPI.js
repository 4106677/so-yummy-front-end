import axios from 'axios';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzNjZDJjZmVkZDA0MWJiYjhkNzU1ZSIsImlhdCI6MTY4MTEzOTg5MCwiZXhwIjoxNjgxMjI2MjkwfQ.bkHhLIWZq2ba4QEZbaGDGV53slti0lXMWXFUsX9UqG4',
  }, 
});

export const addShoppingList = async data => {
  const response = await shoppingInstance.post(
    `recipes/byIdToShoplist/${data._id}`,
    { ingredientId: data._id, measure: data.measure }
  );
  return response;
};

export const getAllShoppingList = async () => {
   const response = await shoppingInstance.get(
     '/shopping-list'
   );
  const data = response.data;
  console.log(data);
  return data;
};

export const deleteShoppingList = async id => {
  const data = await shoppingInstance.delete(`/shopping-list/${id}`);
  console.log(data);
  return data;
};
