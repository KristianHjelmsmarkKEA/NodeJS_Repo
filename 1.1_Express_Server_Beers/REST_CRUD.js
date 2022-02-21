//Import Express
const express = require("express"); //Import
const app = express(); //instantiate

const beers =[
    {id: 1, beerName: "Carlsberg", expirationDate: new Date() },
    {id: 2, beerName: "Tuborg", expirationDate: new Date() },
    {id: 3, alcoholPercentage: 4.6 },
];

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
    beers.push(req.body);
    res.send(req.body);
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

app.patch("/beers/:id", (req, res) => {
    const beerToPatch = req.body;
    beerToPatch.id = req.params.id;

    const beerIndex = beers.findIndex(beer => beer.id === req.params.id);
    if (beerIndex !== -1) {
        if(beers[beerIndex].beerName !== beerToPatch.beerName) beers[beerIndex].beerName = beerToPatch.beerName;
        res.send(beers[beerIndex]);
    } else {
        res.send({"message":"Beer not patched, Error"});
    } 
})

app.delete("/beers/:id", (req, res) => {
    const beerToDelete = beers.findIndex(beer => beer.id === Number(req.params.id));
    if (beerToDelete !== -1) {
        beers.splice(beerToDelete, 1);
        res.send({"message": "Beer deleted"});
    } else {
        res.status(404).send({ data: beerToDelete, "message" : "Beer not deleted, ERROR"});
    }
});


app.listen(8080, () => {
    console.log("Server is running on port: ", 8080);
}); //Should be on the bottom of the file