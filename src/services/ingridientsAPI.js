import axios from 'axios';

const ingridientsInstance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com',
});


export const getAllIngridients = () => {
   return ingridientsInstance.get('/ingredients/list');
 }