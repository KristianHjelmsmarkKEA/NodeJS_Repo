"use strict"; //Top level

//Bad practice
// var globalVariable = "Don't do this";

//Never ever do this
//totalGlobalVariable = "Is this okay?";

//const er en assignment

const memeTop = "Mom: We have Javascript at home";
let memeBottom = "Javascript at home: Node.js";

const meme = {
    points: 43251
};

meme.points += 1;
console.log(meme.points);
meme.age = "old";
console.log(meme);

// {} scope i en funktion

{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}
{
    var someValue = true;
    {
        var someValue = false;
    }
    console.log(someValue);
}


//Hvis man bruger var, istedet for let, så printer den kun "10" 10 gange, fordi var leaker.
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}