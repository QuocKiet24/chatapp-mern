import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-mern-m9tb.onrender.com/api",
  withCredentials: true,
});
