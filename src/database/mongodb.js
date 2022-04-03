import {MongoClient, ServerApiVersion} from "mongodb";

const password = "TT5VY6upnstY9G"
const uri = "mongodb+srv://virginie:"+password+"@cluster0.ort7q.mongodb.net/api-node?retryWrites=true&w=majority";

export const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
mongoClient.connect(err => { console.log("Mongodb is connected") });