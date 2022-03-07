const express = require("express");
const app = express();

app.use(express.static("public"));

//Serverside rendering, hurtigere, bedere iso search results, sends everything at once, one time
const fs = require("fs");

const nav = fs.readFileSync("./public/componets/nav/nav.html").toString();
const footer = fs.readFileSync("./public/componets/footer/footer.html").toString();


const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const themepark = fs.readFileSync("./public/pages/themepark/themepark.html").toString();

const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "The Theme Park") + frontpage + footer;
const themeparkPage = nav.replace("%%TITLE_PLACEHOLDER%%", "Have fun!") + themepark + footer;


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/themepark", (req, res) => {
    res.send(themeparkPage);
});

app.listen(8080, () => {
    console.log("The server is running on port:", 8080);
});