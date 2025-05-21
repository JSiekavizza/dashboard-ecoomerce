const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    description: { type: String },
    image: { type: String }, // Ruta de la imagen
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
