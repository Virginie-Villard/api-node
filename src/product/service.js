import {mongoClient} from "../database/mongodb.js";
import {ObjectId} from "mongodb";


export async function addProduct(product)
{
    const collection = mongoClient.db("api-node").collection("products");
    collection.insertOne(product).catch(e => console.error(e))
}

export async function getAll()
{
    const collection = mongoClient.db("api-node").collection("products");
    const cursor = collection.find();
    return await cursor.toArray()
}

export async function getProductById(id)
{
    try {
        const query = { _id: new ObjectId(id) };
        const collection = mongoClient.db("api-node").collection("products");
        return collection.findOne(query);
    }
    catch (e) {
        if (e instanceof TypeError) {
            throw Error("id is not a valid ObjectId : " + e)
        } else {
            throw Error("something went wrong")
        }
    }
}

