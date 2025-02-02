import axios from "axios";

const api = axios.create({
  baseURL: "https://deploy-758919411198.southamerica-east1.run.app",
  responseType: "json",
  timeout: 10000,
});

export default api;
