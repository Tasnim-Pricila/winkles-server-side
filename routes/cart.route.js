const express = require('express');
const cartController = require('../controllers/cart.controller');
const cartRoute = express.Router();

 cartRoute.route('/')
    .post(cartController.createCart)
    .get(cartController.getCarts)
 cartRoute.route('/:id')
    .get(cartController.getCartById)
 cartRoute.route('/user/:userId')
    .get(cartController.getCartByUserId)
    .patch(cartController.updateCart)

module.exports =  cartRoute;