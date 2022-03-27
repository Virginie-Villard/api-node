const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://virginie:password@cluster0.ort7q.mongodb.net/api-node?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


const app = express();
const port = 3000;

// Where we will keep products
let products = [];

app.use(cors());

// Configuring body parser middleware
// bodyParser.urlencoded is the default body type for forms
app.use(bodyParser.urlencoded({ extended: false }));
// application/json is something we'd use when requesting a resource using jQuery or backend REST client
app.use(bodyParser.json());

app.post('/product', (req, res) => {
    const product = req.body;

    // Output the product to the console for debugging
    console.log(product);
    products.push(product);

    client.connect(err => {
        const collection = client.db("api-node").collection("products");

        collection.insertOne(product).catch(e => console.error(e))


        //client.close();
    });

    res.send('Product is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


