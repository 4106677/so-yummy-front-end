import axios from 'axios';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVhYzYyYjUyMGQwNThiMzkwZWI5OSIsImlhdCI6MTY4MDg4NDUwNSwiZXhwIjoxNjgwOTcwOTA1fQ.7hB4_WLpC9opXocHO3iDzRJzR-izbrR8jW0od3dmPZU',
  },
});

export const addToShoppingList = async (id) => {
  const data = await shoppingInstance.get(
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