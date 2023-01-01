const Orders = require("../models/ShippingDetails");

exports.createOrderServices = async (data) => {
    const result = await Orders.create(data);
    return result;
}

exports.getOrderServices = async (filters, queries) => {
    const result = await Orders.find(filters)
        .sort(queries.sort)
        .select(queries.fields)
        .skip(queries.skip)
        .limit(queries.limit);
    const count = await Orders.countDocuments(filters);
    return { count, result };
}

exports.getOrderServicesByEmail = async (email) => {
    const result = await Orders.find({ email: email });
    return result;
}

exports.updateOrderServices = async (id, data) => {
    const result = await Orders.updateOne({ _id: id }, { $set: data }, {
        runValidators: true
    });
    return result;
}
exports.deleteOrderServices = async (id) => {
    const result = await Orders.deleteOne({ _id: id });
    return result;
}