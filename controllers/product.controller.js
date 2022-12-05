const { createProductServices, getProductServices, getProductServicesById } = require("../services/product.services");

exports.getProducts = async (req, res, next) => {
    try {
        let filters = { ...req.query };
        const excludeFields = ['sort', 'page', 'limit', 'fields', 'skip'];
        excludeFields.forEach(field => delete filters[field])
        
        // console.log(filters)
        const queries = {};
        
        if(req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sort = sortBy; 
        }
        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields; 
        }
        if(req.query.page){
            const { page=1 , limit=5 } = req.query;
            const skip = (page - 1) * +limit;
            queries.skip = skip;
            queries.limit = +limit;
        }
        // console.log(queries)
        // gt, gte, lt, lte 
        let filterString = JSON.stringify(filters);
        filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g , match => `$${match}`)
        // console.log(JSON.parse (filterString));
        filters  = JSON.parse (filterString);
        

        const products = await getProductServices(filters, queries);
        res.status(200).send({
            status: 'success',
            message: "Data found Successfully.",
            data: products
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data Finding Failed.",
            error: error.message
        })
    }

}

exports.createProduct = async (req, res, next) => {
    try {
        const result = await createProductServices(req.body);
        res.status(200).send({
            status: 'success',
            message: "Data Inserted Successfully.",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Data Insertion Failed.",
            error: error.message
        })
    }
}

exports.getProductById = async(req, res, next) => {
    const { id } = req.params;
    try {
        const result = await getProductServicesById(id);
        if(!result){
            return res.status(400).send({
                status: fail,
                message: "Could not find any product with this ID",
                error: error.message
            })
        }
        res.status(200).send({
            status: 'success',
            message: "product get successfully",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            status: 'fail',
            message: "Could not find any products",
            error: error.message
        })
    }
}


