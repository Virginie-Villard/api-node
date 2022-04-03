import express from "express";
import {getProduct, getProducts, postProduct} from "../product/controller.js";
import {authMiddleware} from "../auth/auth.js";

export const router = express.Router();


router.post("/product", postProduct);

router.get("/products", authMiddleware, getProducts);

router.get('/product/:id', getProduct);
