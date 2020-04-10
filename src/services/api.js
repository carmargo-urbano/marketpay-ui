/*
  Utilizando a lib: https://github.com/typicode/json-server
  Para criação de uma API REST fake.
*/
//https://marketpay-api.herokuapp.com
//baseURL: 'http://localhost:3000',

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://marketpay-api.herokuapp.com',
});

export default api;
