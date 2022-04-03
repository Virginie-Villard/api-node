import {mongoClient} from "../database/mongodb.js";

export async function addProduct(product)
{
    const collection = mongoClient.db("api-node").collection("products");
    collection.insertOne(product).catch(e => console.error(e))
}

