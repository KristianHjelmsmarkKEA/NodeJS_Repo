const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/countdown.html",  )
});


app.listen(process.env.PORT || "5000", () => {
    console.log("The Server is running", 5000);
});

