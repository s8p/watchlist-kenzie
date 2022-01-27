import axios from "axios";
// mudar nome para TMDBapi USERapi
export const movieApi = axios.create({
  baseURL: "",
});

export const userApi = axios.create({
  baseURL: "",
});
