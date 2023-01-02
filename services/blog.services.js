const Blog = require("../models/Blog");

exports.createBlogServices = async (data) => {
    const result = await Blog.create(data);
    return result;
}
exports.getBlogServices = async () => {
    const result = await Blog.find({});
    const count = await Blog.count();
    return {count, result};
}
exports.getBlogServicesById = async (id) => {
    const result = await Blog.findOne({_id: id});
    return result;
}
