const Product = require('../models/productModel');

// Função para obter todos os produtos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para criar um novo produto
const createProduct = async (req, res) => {
  const { name, description, quantity, imageUrl } = req.body;
  const newProduct = new Product({ name, description, quantity, imageUrl });
  
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Função para editar um produto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, quantity, imageUrl } = req.body;
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, quantity, imageUrl }, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Função para deletar um produto
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  try {
    await Product.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
