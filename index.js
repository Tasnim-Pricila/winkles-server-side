const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const dbconnect = require('./Database/dbConnect');
const productRoute = require('./routes/product.route');
const brandRoute = require('./routes/brand.route');
const categoryRoute = require('./routes/category.route');
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

dbconnect();

app.get('/', (req, res) => {
    res.send("Winkles Clothing...");
})

app.use('/products', productRoute)
app.use('/brands', brandRoute)
app.use('/categories', categoryRoute)

app.listen(port, () => {
    console.log(`App is running on port ${port}`.white.bold);
})



//         // Upsert User 
//         app.put('/user/:email', async (req, res) => {
//             const email = req.params.email;
//             const filter = { email: email };
//             const user = req.body;
//             const options = { upsert: true };
//             const updatedUser = {
//                 $set: user
//             }
//             const result = await userCollection.updateOne(filter, updatedUser, options);
//             const accessToken = jwt.sign(filter, process.env.ACCESS_TOKEN,
//                 {
//                     expiresIn: '1d'
//                 });
//             res.send({ result, accessToken });
//             // res.send(result)
//         })

//         app.post('/user/:email', async (req, res) => {
//             const email = req.params.email;
//             const filter = { email: email };
//             const users = req.body;
//             const result = await userCollection.insertOne(users);
//             const accessToken = jwt.sign(filter, process.env.ACCESS_TOKEN,
//                 {
//                     expiresIn: '1d'
//                 });
//             res.send({ result, accessToken });
//         })
//         // GET USERS 
//         app.get('/users', async (req, res) => {
//             const result = await userCollection.find().toArray();
//             res.send(result);
//         })
 