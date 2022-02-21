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

app.get("/beers", (req, res) => {
    res.send("Welcome");
});

app.get("/clientgreeting/:name", (req, res) => {
    res.send({ greeting: `Hello there,  ${req.params.name}.`});
});

//url : kangaroofacts?cankick=true
app.get("/kangaroofacts", (req, res) => {
    res.send(req.query);
})

app.post("/mirror", (req, res) => {
    res.send(req.body);
} );



const PORT = 8080;
app.listen(PORT, (error) => {
    console.log("Server is running on port: ", PORT);
}); //Should be on the bottom of the file

//How can i send data with a GET request???
//path variable       url: /1
//query string        url: ?key=value&key2=value2

