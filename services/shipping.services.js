const Orders = require("../models/ShippingDetails");

exports.createOrderServices = async (data) => {
    const result = await Orders.create(data);
    return result;
}