import axios from 'axios';
import { setToken } from '../redux/auth/operations';

// const getToken = () => {
//   const serializedState = localStorage.getItem('persist:auth');
//   const serializedStateParse =
//     serializedState === null ? undefined : JSON.parse(serializedState);
//   return `Bearer ${serializedStateParse.token.slice(1, -1)}`;
// };

const { REACT_APP_API_URL } = 'https://recipes-becend-49lg.onrender.com/';

const shoppingInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    // Authorization: getToken(),
    Authorization: setToken(),
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
  const response = await shoppingInstance.get('/shopping-list');
  const data = response.data;
  console.log(data);
  return data;
};

export const deleteShoppingList = async id => {
  const data = await shoppingInstance.delete(`/shopping-list/${id}`);
  console.log(data);
  return data;
};
