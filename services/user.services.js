const User = require("../models/User")

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}
exports.findUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    // .populate('cart.product');
    return user;
}
exports.getUserServices = async () => {
    const result = await User.find({});
    const count = await User.count();
    return { count, result };
}
exports.updateUserServices = async (email, data) => {
    const result = await User.updateOne({ email: email }, { $set: data }, {
        runValidators: true
    });
    return result;
}
exports.updateUserServicesbyId = async (id, data) => {
    const result = await User.updateOne({ _id: id }, { $set: data }, {
        runValidators: true
    });
    return result;
}
exports.updateProductById = async (productId, data) => {
    // console.log(data.qty);
    let result
    if (data.qty === 0) {
        result = await User.findOneAndUpdate(
            { 'cart.product._id': productId },
            {
                $pull: {
                    'cart.product': { _id: productId }
                }
            },
            {
                new: true
            });
    }
    else {
        result = await User.findOneAndUpdate(
            { 'cart.product._id': productId },
            {
                $set: {
                    'cart.product.$': data
                }
            },
            {
                new: true
            });
    }
    return result;
}

