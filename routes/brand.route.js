const express = require('express');
const brandController = require('../controllers/brand.controller');
const brandRoute = express.Router();

brandRoute.route('/')
    .post(brandController.createBrand)
    .get(brandController.getBrands)
brandRoute.route('/:id')
    .get(brandController.getBrandById)

module.exports = brandRoute;