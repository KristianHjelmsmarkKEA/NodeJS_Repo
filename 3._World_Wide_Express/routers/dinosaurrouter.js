const router = require("express").Router();
const { calculateAmoutOfCoolDinosaurs } = require("../dinosaurs/dinosaurs.js");

router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({ data: calculateAmoutOfCoolDinosaurs() })

});

router.get("/amountofcooldinosaurs", (req, res) => {
    res.redirect("/calculatecooldinosaurs");
});

//http://localhost:9000/coolestdinosaur?cool=yes
router.get("/coolestdinosaur", (req, res) => {
    if (req.query.cool === "yes") {
        return res.send({ dinosaur: "Mosasaurus" });
    } else {
        res.send({ dinosaur: "T. Rex" });    
    }
});


// module.exports = router; //Single export, simple

module.exports = {   //Can export multiple routes
    router: router
};