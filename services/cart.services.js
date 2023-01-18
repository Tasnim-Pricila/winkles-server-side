const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.createCartServices = async (data) => {
    const result = await Cart.create(data);
    return result;
}
exports.getCartServices = async () => {
    const result = await Cart.find({});
    const count = await Cart.count();
    return {count, result};
}
exports.getCartServicesById = async (id) => {
    const result = await Cart.findOne({_id: id});
    return result;
}
exports.getCartServicesByUserId = async (id) => {
    const result = await Cart.find({ userId: id });
    return result;
}
exports.updateCartServicesByUserId = async (id, data) => {
    const result = await Cart.updateOne({ userId: id }, { $set: data }, {
        runValidators: true
    });
    return result;
}
