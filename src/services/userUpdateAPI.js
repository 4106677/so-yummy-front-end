import axios from 'axios';

const { REACT_APP_API_URL } = 'https://recipes-becend-49lg.onrender.com/';

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});


export const updateUserAPI = async (data) => {
  try {
   await instance.patch(`/auth/updateUser`, data);
  } catch (err) {
   return err;
  }
}; 