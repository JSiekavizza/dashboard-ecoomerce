import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_API_URL || "dashboard-ecoomerce.railway.internal", // Cambiar en producción
});

export const getDashboardStats = () => api.get("/api/dashboard/stats");
