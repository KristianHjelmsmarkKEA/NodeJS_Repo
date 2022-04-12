import express from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routers/routes.js";


mongoose.connect("mongodb+srv://KristianH:mandatory2@mandatory2.ytbuq.mongodb.net/mandatory2Database?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('Error', console.log.bind(console, "DB connection error"));
db.once('open', function(callback) {
    console.log("DB connection established");
});

app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});