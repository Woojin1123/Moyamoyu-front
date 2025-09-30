import axios from "axios";
import useAuthStore from "@/store/authStore";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_API_URL;
axios.defaults.withCredentials = true;
const token = useAuthStore.getState().getAccessToken();

axios.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
