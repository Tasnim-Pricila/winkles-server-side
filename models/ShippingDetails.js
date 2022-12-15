const mongoose = require('mongoose');
const validator = require('validator');

const shippingDetailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide a number"],
    },
    address: {
        type: String,
        required: [true, "Address field is required "],
    },
    notes: {
        type: String,
    }
}, {
    timestamps: true
});

const Orders = mongoose.model("Orders", shippingDetailsSchema);

module.exports = Orders;