const express = require('express');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/verifyToken');
const userRoute = express.Router();

userRoute.post('/signup', userController.signup)
userRoute.post('/login', userController.login)
userRoute.get('/me', verifyToken, userController.getMe)

module.exports = userRoute;