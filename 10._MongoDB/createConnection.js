import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017"
const dbName = "videos";

const client = await MongoClient.connect(url);
const db = client.db(dbName);

//console.log(db);
//console.log(client);


export default {
    tutorials: db.getCollection("tutorials")
};