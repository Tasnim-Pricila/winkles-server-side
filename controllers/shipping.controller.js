const { createOrderServices, getOrderServices, getOrderServicesByEmail, deleteOrderServices, updateOrderServices } = require("../services/shipping.services");

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
exports.getOrders = async(req, res, next) => {
    try {
        const result = await getOrderServices();
        res.status(200).send({
            status: 'success',
            message: "Orders get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Orders",
            error: error.message
        })
    }
}


exports.getOrderByEmail = async(req, res, next) => {
    const { email } = req.params;
    try {
        const result = await getOrderServicesByEmail(email);
        if(!result){
            return res.status(400).send({
                status: fail,
                message: "Could not find any Order with this email",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Orders get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Orders",
            error: error.message
        })
    }
}

exports.updateOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateOrderServices(id, req.body);

        res.status(200).send({
            status: 'success',
            message: "Order Updated Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Order Update Failed.",
            error: error.message
        })
    }
}
exports.deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteOrderServices(id);

        res.status(200).send({
            status: 'success',
            message: "Order Deleted Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Order Deletion Failed.",
            error: error.message
        })
    }
}

