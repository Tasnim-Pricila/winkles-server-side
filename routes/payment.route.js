const paymentController = require("../controllers/payment.controller");
const express = require('express');
const verifyJWT = require("../middleware/verifyToken");
const paymentRoute = express.Router();

paymentRoute.route('/create-payment-intent')
    .post( paymentController.createPayment)
paymentRoute.route('/')
    .post(paymentController.postPayment)
    .get(paymentController.getPayment)

module.exports = paymentRoute;