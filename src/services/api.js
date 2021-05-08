import  axios from 'axios';

const api = axios.create({
  baseURL: 'https://trello-api-slideworks.herokuapp.com/'
});

export default api;