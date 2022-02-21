const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome too my website</h1>
    `);
});


app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html" )
});


app.listen(8080, () => {
    console.log("The server is running on port: ", 8080);
});
