const { createCartServices, getCartServices, getCartServicesById, getCartServicesByUserId, updateCartServicesByUserId } = require("../services/Cart.services");

exports.createCart = async(req, res, next) => {
    try {
        const result = await createCartServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Cart created successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not create the Cart",
            error: error.message
        })
    }
}
exports.getCarts = async(req, res, next) => {
    try {
        const result = await getCartServices();
        res.status(200).send({
            status: 'success',
            message: "Carts get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Carts",
            error: error.message
        })
    }
}
exports.getCartById = async(req, res, next) => {
    const { id } = req.params;
    try {
        const result = await getCartServicesById(id);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Cart with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Cart get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Carts",
            error: error.message
        })
    }
}
exports.getCartByUserId = async(req, res, next) => {
    const { productId } = req.params;
    // console.log(req.params);
    try {
        const result = await getCartServicesByUserId(productId);
        if(!result){
            return res.status(400).send({
                status: 'fail',
                message: "Could not find any Cart with this ID",
                // error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "Cart get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any Carts",
            error: error.message
        })
    }
}
exports.updateCart = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateCartServicesByUserId(id, req.body);

        res.status(200).send({
            status: 'success',
            message: "cart Updated Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "cart Update Failed.",
            error: error.message
        })
    }
}
