//Import Express
const express = require("express"); //Import
const app = express(); //instantiate

const beers =[{id:1}]

app.use(express.json()); //Allows us to parse json

//const app = require("express")();  --oneline implement and instantiate
        //Endpoit    Callback function
app.get("/beers", (req, res) => {
    res.send({ message: "Eoy" });
});

app.get("/beers/1", (req, res) => {
    res.send("Welcome");
});


app.post("/mirror", (req, res) => {
    res.send(req.body);
} );

app.put()


app.listen(8080); //Should be on the bottom of the file