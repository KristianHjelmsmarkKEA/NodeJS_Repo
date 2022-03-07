const express = require("express"); //require is import
const app = express();

app.use(express.static("public")); //security messure, giver client adgang til public filer

//console.log(require("./dinosaurs/dinosaurs.json"));  // ./ indikere, at det er en pathfile.

//const { calculateAmoutOfCoolDinosaurs } = require("./dinosaurs/dinosaurs.js"); 
//console.log(calculateAmoutOfCoolDinosaurs());


const dinosaursrouter = require("./routers/dinosaurrouter.js");
app.use(dinosaursrouter.router);  //man kan også: app.use("/dinosaurs", dinosaursrouter.router); bruges i nogle firmaer


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
});

app.get("/welcome", (req, res) => {
    res.send(`
    <h1>Welcome too my website</h1>
    `);
});


app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html" )
});


const PORT = process.env.PORT || 9000;  // ? process.env.PORT ? eller ||, bruges til en fallback port, hvis npm run start-dev ikke bliver specificeret/kørt.
//9000 er nu default port, hvis man under development ikke kalder en specifik port.

const server = app.listen(PORT, () => {
    //console.log(server); //app.listen retunere et object, som er server.
    console.log("The server is running on port: ", server.address().port);
});
