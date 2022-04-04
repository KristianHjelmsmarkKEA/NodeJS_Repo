import express from "express";

const app = express();

//import cors from "cors"; //Server libary, header
//app.use(cors());

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve("../client/public")))

import playerRouter from "./routers/playersRouter.js"
app.use(playerRouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});