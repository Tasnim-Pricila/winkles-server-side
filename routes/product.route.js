const express = require('express');
const productController  = require('../controllers/product.controller');
const productRoute = express.Router();

productRoute.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)
productRoute.route('/:id')
    .get(productController.getProductById)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = productRoute;