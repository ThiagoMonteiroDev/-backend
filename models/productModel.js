const mongoose = require('mongoose');

// Definindo o esquema para o produto
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  quantity: { type: Number, required: true },
  imageUrl: String,
});

// Criando o modelo a partir do esquema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
