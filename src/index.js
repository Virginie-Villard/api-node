import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import "./database/mongodb.js";
import {router} from "./router/router.js";

const port = 3000;

const app = express();
app.use(cors());
// Configuring body parser middleware
// bodyParser.urlencoded is the default body type for forms
app.use(bodyParser.urlencoded({ extended: false }));
// application/json is something we'd use when requesting a resource using jQuery or backend REST client
app.use(bodyParser.json());

app.use(router)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));


