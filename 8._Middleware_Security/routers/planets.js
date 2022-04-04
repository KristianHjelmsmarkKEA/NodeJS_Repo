// const router = require("express").Router();
// the above line is the old way to import the router functions, but with modules we cant do that anymore
import { Router } from "express";
const router = Router();

router.get("/spinplanet", (req, res) => {
    req.session.planetName = "Jupyter";
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = true; // the session is in the req
    res.send({ message: `Planet was spinning: ${wasSpinning}.` });
});

router.get("/stopplanet", (req, res) => {
    //the session data can be accessed across routes/functions/files it could contain if the user is logged in for example
    //if the user isn't logged in then it wouldn't direct the user onward, but perhaps to a wildcard/fallback route
    //or give a response with the alert package mentioned in mandatory 2 description (toastr)
    console.log(req.session.planetName);
    const wasSpinning = req.session.isSpinning;
    req.session.isSpinning = false; // the session is in the req
    res.send({ message: `Planet was spinning: ${wasSpinning}.` });
});

// because we are using modules type we do not use module.exports anymore, this is the new syntax for exporting the module router
export default router;