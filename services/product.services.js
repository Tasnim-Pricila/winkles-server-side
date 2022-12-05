const Product = require("../models/Product");

exports.getProductServices = async (filters, queries) => {
    const result = await Product.find(filters)
        .sort(queries.sort)
        .select(queries.fields)
        .skip(queries.skip)
        .limit(queries.limit)
    // const result = await Product.find({ brand: { $in: ['Style Echo', 'Jens'] }})
        
    const count = await Product.countDocuments(filters)
    return { count, result };
}
exports.createProductServices = async (data) => {
    const result = await Product.create(data);
    return result;
}
exports.getProductServicesById = async (id) => {
    const result = await Product.findOne({_id: id});
    return result;
}