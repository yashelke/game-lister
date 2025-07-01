// GlobalApi.jsx
import axios from 'axios';

const key = "e1104bd05d904611ab2967dfca6c856d";

const axiosCreate = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

// Return a function so it can be called when needed
const getGenreList = () => axiosCreate.get(`/genres?key=${key}`);
const getAllGames= () => axiosCreate.get(`/games?key=${key}`);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
const GlobalApi = {
  getGenreList,
  getAllGames,
  getGameListByGenreId
};

export default GlobalApi;
