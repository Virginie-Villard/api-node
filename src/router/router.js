import express from "express";
import {getProduct, getProducts, postProduct} from "../product/controller.js";

export const router = express.Router();


router.post("/product", postProduct);

router.get("/products", getProducts);

router.get('/product/:id', getProduct);
