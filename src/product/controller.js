import {addProduct} from "./service.js";


export async function postProduct(req, res)
{
    try {
        const product = req.body;
        await addProduct(product)
        res.send('Product is added to the database');
    }
    catch (e) {
        console.error(e);
    }
}

export async function getProduct(req, res)
{
    try {
        // Ask the service to get the product
        // If product is found send it back with a 200 code
        // If product is not found, send back a 404
    }
    catch (e) {
        console.error(e);
    }
}