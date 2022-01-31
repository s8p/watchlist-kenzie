import axios from "axios";

const token = process.env.REACT_APP_TMDB_TOKEN;
export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { Authorization: `Bearer ${token}` },
});

export const userApi = axios.create({
  baseURL: "https://watchlist-fake-api.herokuapp.com",
});
