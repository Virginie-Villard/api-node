import express from "express";
import {postProduct} from "../product/controller.js";

export const router = express.Router();


router.post("/product", postProduct);
