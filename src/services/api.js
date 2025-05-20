import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_API_URL || "http://localhost:3001", // Cambiar en producción
});

export const getDashboardStats = () => api.get("/api/dashboard/stats");
