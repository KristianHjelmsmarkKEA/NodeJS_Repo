const express = require("express");
const app = express();

app.use(express.static("public"));

//Serverside rendering, hurtigere, bedere SEO search results, sends everything at once, one time
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer/footer.html").toString();


const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const nodejspage = fs.readFileSync("./public/pages/nodejs/nodejs.html").toString();
const terminalpage = fs.readFileSync("./public/pages/terminal/terminal.html").toString();
const codeexamplespage = fs.readFileSync("./public/pages/codeexamples/codeexamples.html").toString();
const toolspage = fs.readFileSync("./public/pages/tools/tools.html").toString();
const theorypage = fs.readFileSync("./public/pages/theory/theory.html").toString();


const frontpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Frontpage") + frontpage + footer;
const nodejspagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "NodeJS") + nodejspage + footer;
const terminalpagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Terminal Commands") + terminalpage + footer;
const codeexamplespagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Code Examples") + codeexamplespage + footer;
const toolspagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Used Tools") + toolspage + footer;
const theorypagePage = nav.replace("%%TITLE_PLACEHOLDER%%", "Generel theory") + theorypage + footer;


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/nodejs", (req, res) => {
    res.send(nodejspagePage);
});

app.get("/terminal", (req, res) => {
    res.send(terminalpagePage);
});

app.get("/codeexamples", (req, res) => {
    res.send(codeexamplespagePage)
});

app.get("/tools", (req, res) => {
    res.send(toolspagePage);
});

app.get("/theory", (req, res) => {
    res.send(theorypagePage);
});

const PORT = process.env.PORT || 9000;  // ? process.env.PORT ? eller ||, bruges til en fallback port, hvis npm run start-dev ikke bliver specificeret/kørt.
//9000 er nu default port, hvis man under development ikke kalder en specifik port.

const server = app.listen(PORT, () => {
    //console.log(server); //app.listen retunere et object, som er server.
    console.log("The server is running on port: ", server.address().port);
});