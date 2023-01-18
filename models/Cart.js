const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = mongoose.Schema({
    product: [{
        id: {
            type: ObjectId,
            ref: "Product",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],

}, {
    timestamps: true
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;