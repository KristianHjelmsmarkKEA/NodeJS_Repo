const { coolDinosaurs, shittyDinosaurs } = require("./dinosaurs.json");

/*
const people = {            //Destructure an object
    first: "Frederik",
    second: "Thor"
}
const {first, second} = people;
console.log(first, second);
*/

console.log(coolDinosaurs);

function amountOfCoolDinosaurs() {
    return coolDinosaurs.length;
}

module.exports = {
    calculateAmoutOfCoolDinosaurs: amountOfCoolDinosaurs
}

//console.log(module);

