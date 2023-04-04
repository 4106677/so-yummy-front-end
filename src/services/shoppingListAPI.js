import axios from 'axios';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});


export const getAllShoppingList = async () => {
   const { data } = await shoppingInstance.get(
     '/recipes/search/beef?pages=1&limit=3'
   );
  console.log(data);
  return data;
}

export const deleteShoppingList = async (id) => {
  const { data } = await shoppingInstance.delete(`${id}`);
  console.log(data);
  return data;
};