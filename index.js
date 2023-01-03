const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbconnect = require('./Database/dbConnect');
const productRoute = require('./routes/product.route');
const brandRoute = require('./routes/brand.route');
const categoryRoute = require('./routes/category.route');
const orderRoute = require('./routes/shipping.route');
const userRoute = require('./routes/user.route');
const blogRoute = require('./routes/blog.route');
const port = process.env.PORT || 8080;
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

dbconnect();

app.get('/', (req, res) => {
    res.send("Winkles Clothing...");
})


app.use('/image', express.static('image'))
app.use('/products', productRoute)
app.use('/brands', brandRoute)
app.use('/blogs', blogRoute)
app.use('/categories', categoryRoute)
app.use('/orders', orderRoute)
app.use('/users', userRoute)


app.listen(port, () => {
    console.log(`App is running on port ${port}`.white.bold);
})