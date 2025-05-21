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
app.use("/uploads", express.static("uploads")); // Servir archivos estáticos (imágenes)

// Ruta del dashboard
const dashboardRoutes = require("./src/routes/dashboard");
app.use("/api/dashboard", dashboardRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
