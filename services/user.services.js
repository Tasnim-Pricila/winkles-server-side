const User = require("../models/User")

exports.signupService = async (userInfo) => {
    const user = await User.create(userInfo);
    return user;
}
exports.findUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}
exports.getUserServices = async () => {
    const result = await User.find({});
    const count = await User.count();
    return {count, result};
}
exports.updateUserServices = async (email, data) => {
    const result = await User.updateOne({email : email }, { $set: data }, {
        runValidators: true
    });
    return result;
}