import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.42.151:8000",
  responseType: "json",
});

export default api;
