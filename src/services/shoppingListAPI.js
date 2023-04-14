import axios from 'axios';

import { getToken } from './getToken';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization: getToken(),
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
  const data = await shoppingInstance.get('/shopping-list');
  return data;
};

export const deleteShoppingList = async _id => {
  const data = await shoppingInstance.delete(`/shopping-list/${_id}`);
  return data;
};
