const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');


const port = 3000;

const password = "TT5VY6upnstY9G"
const uri = "mongodb+srv://virginie:"+password+"@cluster0.ort7q.mongodb.net/api-node?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => { console.log("Mongodb is connected") });

const app = express();
app.use(cors());

// Configuring body parser middleware
// bodyParser.urlencoded is the default body type for forms
app.use(bodyParser.urlencoded({ extended: false }));
// application/json is something we'd use when requesting a resource using jQuery or backend REST client
app.use(bodyParser.json());

app.post('/product', (req, res) => {
    const product = req.body;
    console.log(product);
    const collection = client.db("api-node").collection("products");
    collection.insertOne(product).catch(e => console.error(e))
    res.send('Product is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


