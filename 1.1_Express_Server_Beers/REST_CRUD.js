//Import Express
const express = require("express"); //Import
const app = express(); //instantiate

const beers =[
    {id: 1, beerName: "Carlsberg", expirationDate: new Date() },
    {id: 2, beerName: "Tuborg", expirationDate: new Date() },
    {id: 3, alcoholPercentage: 4.6 },
];

let CURRENT_ID = 3;

app.use(express.json()); //Allows us to parse json, body parsing.

//const app = require("express")();  --oneline implement and instantiate
        //Endpoit    Callback function
app.get("/beers", (req, res) => {
    res.send({ data: beers });
});

app.get("/beers/:id", (req, res) => {
    const foundBeer = beers.find(beer => beer.id === Number(req.params.id));
    foundBeer ? res.send( { data: foundBeer }): res.status(204).send({}); //turnary?? 
});

app.post("/beers", (req, res) => {
    const beerToCreate = req.body;
    beerToCreate.id = ++CURRENT_ID;
    beers.push(beerToCreate);
    res.send({ data: beerToCreate });
});

app.put("/beers/:id", (req, res) => {
    const beerToReplace = req.body;
    beerToReplace.id = req.params.id;

    const beerIndex = beers.findIndex(beer => beer.id === req.params.id);
    if (beerIndex !== -1) {
        beers[beerIndex] = beerToReplace;

        res.send(req.body);
    } else {
        res.send({"message":"Error"});
    }    
});

//Parse, please parese this to int, it t
//Number, THIS IS A NUMBER, declare

/*
const objectToSpread = {
    name: "Gustav",
    name: "Thor"
};
console.log({objectToSpread});

*/

app.patch("/beers/:id", (req, res) => {
    const foundBeerIndex = beers.findIndex(beer => beer.id === Number(req.params.id));
    if (foundBeerIndex !== -1) {
        const foundBeer = beers[foundBeerIndex];
        const beerToPatch = req.body;
        const updatedBeer = { ...foundBeer, ...beerToPatch, id: foundBeer.id };
        beers[foundBeerIndex] = updatedBeer;
    
        res.send({ data: updatedBeer });
    } else {
        res.status(404).send({});
    }
});

app.delete("/beers/:id", (req, res) => {
    const beerToDelete = beers.findIndex(beer => beer.id === Number(req.params.id));
    if (beerToDelete !== -1) {
        beers.splice(beerToDelete, 1);
        res.send({"message": "Beer deleted"});
    } else {
        res.status(404).send({ data: beerToDelete, "message" : "Beer not deleted, ERROR"});
    }
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
}); //Should be on the bottom of the file