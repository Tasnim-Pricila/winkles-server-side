const express = require('express');
const categoryController = require('../controllers/category.controller');
const categoryRoute = express.Router();

categoryRoute.route('/')
    .post(categoryController.createCategory)
    .get(categoryController.getCategories)
categoryRoute.route('/:id')
    .get(categoryController.getCategoryById)

module.exports = categoryRoute;