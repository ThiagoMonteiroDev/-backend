const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rota para obter todos os produtos
router.get('/', productController.getAllProducts);

// Rota para criar um novo produto
router.post('/', productController.createProduct);

// Rota para atualizar um produto
router.put('/:id', productController.updateProduct);

// Rota para deletar um produto
router.delete('/:id', productController.deleteProduct);

module.exports = router;
