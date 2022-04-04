//When using modules, you cannot import express this way anymore
//const express = require("express");
import express from "express";
//this is the new module way to import express
// //"type": "module", that has to be fixed and you cannot use get in the same way
//  type module has to be added in package.json for modules to be "activated"
const app = express();

app.use(express.static('public'));

import path from "path"; //Not a dependency, is in nodeJS

//console.log(path.resolve("public/clothes.html"));

//Helmet is a security package that you can add to your app, it will help you but doesnt stop all things
//there is explanation in the github and package page
// we can install helmet and use it as middleware and it is executed on all requests and potentially make your application safer
//against hostile attacks
// helmet has been imported as middleware just with these 2 lines
import helmet from "helmet";
app.use(helmet());

//installed via npm install express-rate-limit
//this is a rate limiter which can limit the amount of times you can
import rateLimit from 'express-rate-limit'

const baseLimiter = rateLimit({
    //the line below limits the window auth times, after 15 minutes the limit will be reset
	windowMs: 15 * 60 * 1000, // 15 minutes
    //The client is allowed to access 5 times
	max: 100, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const authLimiter = rateLimit({
    //the line below limits the window auth times, after 15 minutes the limit will be reset
	windowMs: 15 * 60 * 1000, // 15 minutes
    //The client is allowed to access 5 times
	max: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

//baseLimiter applies to all other routes because authLimiter app.use is after and is the latest applied logic
//baseLimiter can be  used for something like dos prevention
app.use(baseLimiter);
//now every route starting with auth will have authLimiter applied
// /auth and /auth/* works in the same and applies to all routes that includes /auth
app.use("/auth", authLimiter);

// should be a post and not a get because a get is never encrypted, even not in a https server
app.post("/auth/login", (req, res) => {
    res.send({ message: "You are trying to log in...."});
});

//session is an extra data layer in the backend, we can use a session keep information whether a user is logged in or not
//express-session is a npm package
import session from "express-session";
//sessions can be used with a boolean statement, isUserLoggedIn and that is authorization for the mandatory(easier than JWT)
//if you would like to log out a user, then req.session.destroy could be used for example
// we will use the status code not authorized
app.use(session({
    secret: 'keyboard cat should not be pushed',
    // if it is true, it will resave the session, if it is false - if you are not updating the session dont try to update the session
    resave: false,
    // it means that even if you are not starting the session for the first, we want to create a session for that client
    // we can control when sessions are made
    saveUninitialized: true,
    // we have to make it false, other it is not gonna work, this only works with true if it is a https server
    cookie: { secure: false }
}));

import planetsRouter from "./routers/planets.js";
app.use(planetsRouter);

//"type": "module", that has to be fixed and you cannot use get in the same way
/*app.get("/clothes", (req, res) => {
    res.sendFile(__dirname + "/public/clothes.html");
});*/

// there is a package called npm morgan that has to do with ipLogger, not sure if it is in express already or if it is an extra
// package you can use, Anders didnt explain
// this will make all routes that start with /auth/ be iplogged, if /auth/ is removed it will be used on all endpoints in the app
app.use("/auth/*", ipLogger);

// this function displays the ip in the log, usually it is something that is logged to a file
// the ip looks odd because we are on localhost
function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

app.get("/frontgate", ipLogger, (req, res) => {
    res.send({});
});

// this covers 2 topics, middleware and security, we can control who can access certain parts of our website
// and have a flow through our routes
let isHatchOpen = true;
function allowEscape(req, res, next) {
    if (isHatchOpen) {
    console.log("Go on");
    req.escapee = "Jimmy";
    next();
    } else {
    res.send({ message: "You are not allowed to pass" });
    }
}
//next passes on the req and res to the /escapehatch path thus Jimmy can be passed via req.escapee

// allowEscape is a middleware function, it has to be in the middle so the order matters
app.get("/escapehatch", allowEscape, (req, res) => {
    res.send({ message: `Congrats ${req.escapee}, you have managed to escape!` });
});

//if 2 routes /room is occupied the first endpoint in the code will be the one that is served first, as it is
// the client server model it will only send one response per request
app.get("/room", (req, res, next) => {
    console.log("You are in room 1");
    // it will throw an error if there is any data in this response though
    //res.send({ data: "You are in room 1"});
    //next gives the next path/route in the code, so it will run this code in the the first app.get
    //but then send the client to the next path or rather next route and thus push in this case the data "you are in room 2"
    next();
});

app.get("/room", (req, res) => {
    res.send({ data: "You are in room 2"});
    // if a next is added to this, it will not get any response from the server, but it is moving you to the next path that matches
    // /room but there is none
});

// this is a fallback but also called a wildcard route that when any route that doesnt exist on the server is attempted to be accessed
// then the server will give this response
// if this route is above any other routes it will hit this route instead of the other one, so the order of
// how routes and things are done on the server is important
app.get("*", (req, res) => {
    res.send("<h1>Not found 404<h1>");
});

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
    console.log("The Server is running", server.address().port);
});