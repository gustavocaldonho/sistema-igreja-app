import axios from "axios";

const api = axios.create({
  baseURL: "https://church-app-backend-ajbu.onrender.com",
  responseType: "json",
});

export default api;
