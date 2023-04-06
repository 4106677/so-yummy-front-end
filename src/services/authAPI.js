import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://recipes-becend-49lg.onrender.com/',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const register = async data => {
  const { data: result } = await instance.post('/auth/register', data);
  console.log(data);
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
