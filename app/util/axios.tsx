import axios from "axios";
const API_KEY = process.env.WEATHERSTACK_API_KEY;
const axiosInstance = axios.create({
  baseURL: "http://api.weatherstack.com"
});
axiosInstance.interceptors.request.use((config) => {
  config.params.access_key = API_KEY;
  return config;
});
export default axiosInstance;