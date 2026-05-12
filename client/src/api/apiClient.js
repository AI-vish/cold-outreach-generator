import axios from "axios";
const apiURL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");
const baseURL = `${apiURL}/api`;

const apiClient = axios.create({
  baseURL,
});

export default apiClient;