const express = require('express');
const orderController = require('../controllers/shipping.controller');
const orderRoute = express.Router();

orderRoute.route('/')
    .post(orderController.createOrder)
    .get(orderController.getOrders)
orderRoute.route('/:email')
    .get(orderController.getOrderByEmail)
orderRoute.route('/:id')
    .patch(orderController.updateOrder)
    .delete(orderController.deleteOrder)

module.exports = orderRoute;