const express = require('express');
const userController = require('../controllers/user.controller');
const verifyToken = require('../middleware/verifyToken');
const userRoute = express.Router();

userRoute.get('/', userController.getUsers)
userRoute.post('/signup', userController.signup)
userRoute.post('/login', userController.login)
userRoute.patch('/update/:id', userController.updateUserById)

userRoute.get('/me', verifyToken, userController.getMe)
userRoute.patch('/me', verifyToken, userController.updateUser)
userRoute.patch('/me/:productId', userController.updateProduct)


module.exports = userRoute;