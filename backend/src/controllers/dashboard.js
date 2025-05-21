const Product = require("../models/Product");

// Ejemplo: Crear un producto
exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock, description } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const product = new Product({
      name,
      price,
      stock,
      description,
      image: imagePath,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Otros métodos: getProducts, updateProduct, deleteProduct...
