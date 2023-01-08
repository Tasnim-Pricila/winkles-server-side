const express = require('express');
const reviewController = require('../controllers/review.controller');
const reviewRoute = express.Router();

reviewRoute.route('/')
    .post(reviewController.createReview)
    .get(reviewController.getReviews)
reviewRoute.route('/:id')
    .get(reviewController.getReviewById)
reviewRoute.route('/product/:productId')
    .get(reviewController.getReviewByProductId)

module.exports = reviewRoute;