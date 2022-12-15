const { createOrderServices } = require("../services/shipping.services");

exports.createOrder = async(req, res, next) => {
    try {
        const result = await createOrderServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Order placed successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not create the order",
            error: error.message
        })
    }
}