const express = require('express');
const productController  = require('../controllers/product.controller');
const uploader = require('../middleware/uploader');
const productRoute = express.Router();

productRoute.post("/file-upload", uploader.array("image"), productController.fileUpload);

productRoute.route('/')
    .get(productController.getProducts)
    .post(productController.createProduct)
productRoute.route('/:id')
    .get(productController.getProductById)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = productRoute;