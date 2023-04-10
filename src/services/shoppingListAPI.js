import axios from 'axios';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhMDNiYzI1OGYzMDE2NWZkODI1ZCIsImlhdCI6MTY4MTExODM1MywiZXhwIjoxNjgxMjA0NzUzfQ.7QxeZ6HDZgIUJUOYBbbtfiig01b5oV_16RO0buUK53M',
  },
});

export const addToShoppingList = async (id) => {
  const data = await shoppingInstance.post(
    `recipes/byIdToShoplist/${id}`
  );
  return data;
};


export const getAllShoppingList = async () => {
   const response = await shoppingInstance.get(
     '/shopping-list?&pages=1&limit=5'
   );
  const data = response.data;
  console.log(data);
  return data;
}


export const deleteShoppingList = async (id) => {
  const data = await shoppingInstance.delete(`/shopping-list/${id}`);
  console.log(data);
  return data;
}; 