const express = require('express');
const blogController = require('../controllers/blog.controller');
const blogRoute = express.Router();

blogRoute.route('/')
    .post(blogController.createBlog)
    .get(blogController.getBlogs)
blogRoute.route('/:id')
    .get(blogController.getBlogById)
    .patch(blogController.updateBlog)
    .delete(blogController.deleteBlog)

module.exports = blogRoute;