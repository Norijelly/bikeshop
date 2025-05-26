const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

// GET /api/products - Get all products
router.get('/', ProductController.getAllProducts);

// GET /api/products/:id - Get single product by ID
router.get('/:id', ProductController.getProductById);

// GET /api/products/category/:categoryId - Get products by category
router.get('/category/:categoryId', ProductController.getProductsByCategory);

// GET /api/products/label/:label - Get products by label (best seller, new product, promo)
router.get('/label/:label', ProductController.getProductsByLabel);

module.exports = router;