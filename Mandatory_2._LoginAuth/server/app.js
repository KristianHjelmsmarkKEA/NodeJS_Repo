import express from "express";
const app = express();
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./routers/routes.js";
import cors from "cors";
import helmet from "helmet";


app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.resolve("../client/public")));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(router);

mongoose.connect("mongodb+srv://KristianH:mandatory2@mandatory2.ytbuq.mongodb.net/mandatory2Database?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on('Error', console.log.bind(console, "DB connection error"));
db.once('open', function(callback) {
    console.log("DB connection established");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});