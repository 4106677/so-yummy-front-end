import axios from 'axios';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVhYzYyYjUyMGQwNThiMzkwZWI5OSIsImlhdCI6MTY4MDk3Mzc1MCwiZXhwIjoxNjgxMDYwMTUwfQ.yBK0ehdYS6ieY38IUfH03ngF_mNt2MF_AAZj6G5XvtE',
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
     '/shopping-list'
  );
  const data = response.data.shoppingList;
  console.log(data);
  return data;
}


export const deleteShoppingList = async (id) => {
  const data = await shoppingInstance.delete(`/shopping-list/${id}`);
  console.log(data);
  return data;
}; 