import axios from "axios";

export const unauthenticated = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
