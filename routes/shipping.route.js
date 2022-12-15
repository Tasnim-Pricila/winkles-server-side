const express = require('express');
const orderController = require('../controllers/shipping.controller');
const orderRoute = express.Router();

orderRoute.route('/')
    .post(orderController.createOrder)


module.exports = orderRoute;