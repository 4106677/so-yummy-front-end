import axios from 'axios';

const shoppingInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVhYzYyYjUyMGQwNThiMzkwZWI5OSIsImlhdCI6MTY4MDc4MDUwMCwiZXhwIjoxNjgwODY2OTAwfQ.LXaaMgcmSc4g0Nag1ZCppxwZonuAF0BRtnoRz-2koCA',
  },
});


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