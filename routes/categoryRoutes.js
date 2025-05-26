const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/categoryController');

// GET /api/categories - Get all categories
router.get('/', CategoryController.getAllCategories);

// GET /api/categories/:id - Get single category by ID
router.get('/:id', CategoryController.getCategoryById);

// GET /api/categories/with-count - Get categories with product count
router.get('/with-count', CategoryController.getCategoriesWithCount);

module.exports = router;