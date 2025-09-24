import axios from "axios";
import useAuthStore from "@/store/authStore";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
  const token = useAuthStore.getState().getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
