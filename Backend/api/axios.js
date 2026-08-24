import axios from "axios";

const api = axios.create({
  baseURL: "https://art-unified-platform.onrender.com/api",
  withCredentials: true,
});

export default api;