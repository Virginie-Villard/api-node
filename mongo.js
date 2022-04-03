const {MongoClient, ServerApiVersion} = require("mongodb");


const password = "TT5VY6upnstY9G"
const uri = "mongodb+srv://virginie:"+password+"@cluster0.ort7q.mongodb.net/api-node?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


// Replace the uri string with your MongoDB deployment's connection string.
async function run() {
    try {
        await client.connect();
        const database = client.db("api-node");
        const collection = database.collection("prototype");

        // create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }

        const result = await collection.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
        await client.close();
    }
}


run().catch(console.dir);