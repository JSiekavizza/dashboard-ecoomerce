require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(
  cors({
    origin:
      process.env.FRONTEND_URL ||
      "https://dashboard-ecoomerce-dev-sieka.vercel.app/",
  })
);
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ Backend del Dashboard E-commerce");
});

// Ruta del dashboard (ejemplo)
app.get("/api/dashboard/stats", (req, res) => {
  res.json({
    totalSales: 10000,
    activeUsers: 150,
    pendingOrders: 5,
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
