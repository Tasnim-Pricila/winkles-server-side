const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

// schema design 
const productSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please provide a name for this product."],
        trim: true,
        unique: [true, "Name must be unique."],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."],
        lowercase: true
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        minLength: [0, "Price can not be less than 0"],
        required: true,
    },

    quantity: {
        type: Number,
        minLength: [0, "Price can not be less than 0"],
        required: true,
    },

    unit: {
        type: String,
        required: true,
        enum: {
            values: ["pcs"],
            message: "quantity value can't be {VALUE}, must be pcs",
        }
    },

    image: {
        type: String,
        required: true,
        validate: [validator.isURL, "Please provide valid url"]
    },

    imageGallery: {
        url: [{
            type: String,
            required: true,
            validate: [validator.isURL, "Please provide valid url"]
        }],
        details: [{
            name: {
                type: String,
                required: true
            },
            size: {
                type: Number,
                required: true
            }

        }]

    },

    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },

    stock: {
        type: String,
        required: true,
        enum: {
            values: ['In Stock', 'Out of Stock'],
            message: "status can not be {VALUE}"
        },
        default: 'In Stock'
    },

}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;