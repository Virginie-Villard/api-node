import {addProduct, getAll, getProductById} from "./service.js";


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

export async function getProducts(req, res)
{
    try
    {
        const result = await getAll();
        res.status(200).send(result);
    }
    catch (e)
    {
        console.error(e);
        res.status(500).send("getProducts: Something went wrong");
    }
}

// Ask the service to get the product
// If product is found send it back with a 200 code
// If product is not found, send back a 404

export async function getProduct(req, res, next)
{
    try
    {
        const result = await getProductById(req.params.id);
        if(result != null)
        {
            res.status(200).send(result);
        }
        else
        {
            res.status(404).send("getProductById : Product not found")
        }
    }
    catch(e)
    {
        res.status(500).send("getProduct: " + e);
    }
}