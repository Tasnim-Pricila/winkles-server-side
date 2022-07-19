const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Winkles Clothing...')
})



const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ly0ad.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(uri);

async function run () {

     // Verify Jwt Token 
    //  function verifyJWT(req, res, next) {
    //     const authHeader = req.headers.authorization;
    //     if (!authHeader) {
    //         return res.status(401).send({ message: "Unauthorized Access" });
    //     }
    //     const token = authHeader.split(' ')[1];
    //     jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    //         if (err) {
    //             return res.status(403).send({ message: "Forbidden Access" });
    //         }
    //         req.decoded = decoded;
    //         next();
    //     })
    // }

    try{
        await client.connect();
        const userCollection = client.db('winkles').collection('users');
        const productCollection = client.db('winkles').collection('products');

        // Upsert User 
        app.put('/user/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const user = req.body;
            const options = { upsert: true };
            const updatedUser = {
                $set: user
            }
            const result = await userCollection.updateOne(filter, updatedUser, options);
            const accessToken = jwt.sign(filter, process.env.ACCESS_TOKEN,
                {
                    expiresIn: '1d'
                });
            res.send({ result, accessToken });
            // res.send(result)
        })

        app.post('/user/:email', async (req, res) => {
            const email = req.params.email;
            const filter = { email: email };
            const users = req.body;
            const result = await userCollection.insertOne(users);
            const accessToken = jwt.sign(filter, process.env.ACCESS_TOKEN,
                {
                    expiresIn: '1d'
                });
            res.send({ result, accessToken });
        })
        // GET USERS 
        app.get('/users', async (req, res) => {
            const result = await userCollection.find().toArray();
            res.send(result);
        })
        // GET USERS 
        app.get('/products', async (req, res) => {
            const result = await productCollection.find().toArray();
            res.send(result);
        })
        // GET USER BT ID 
        app.get('/product/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await productCollection.find(query).toArray();
            res.send(result);
        })
    }
    
    finally{

    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log('Listening to Port', port);
})