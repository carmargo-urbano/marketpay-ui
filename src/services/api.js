/*
  Utilizando a lib: https://github.com/typicode/json-server
  Para criação de uma API REST fake.
*/
//https://marketpay-api.herokuapp.com
//baseURL: 'http://localhost:3000',

import axios from 'axios';
import { getToken } from "./auth";

const api = axios.create({
  baseURL: 'https://marketpay-api.herokuapp.com',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
