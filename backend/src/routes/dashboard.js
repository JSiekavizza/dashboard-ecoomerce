const express = require("express");
const router = express.Router();
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
} = require("../controllers/dashboard");

const upload = require("../middlewares/uploadImage"); // Middleware para subir imágenes

// Rutas CRUD para productos
router.post("/products", upload.single("image"), createProduct); // Subir imagen + datos
router.get("/products", getProducts);
router.put("/products/:id", upload.single("image"), updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
