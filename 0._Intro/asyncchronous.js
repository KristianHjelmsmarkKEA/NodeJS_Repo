// why
// Javascript is single-threaded
// We don't wont to block our application

//import { resolve } from "path";

//import { resolve } from "path";

// When
// over the network: for instance fetch 
// file handling, saving from files, reading from files and so on
// setTimeout / setInterval
// databases


// Promise pending og fulfilled states
// fulfilled: resolved or rejected --when fulfilled, its completed.
//


new Promise((resolve, reject) => {
    try {
        // throw new Error("bomb!");
        resolve("Everthing went well");
    } catch (errorMessage){
        reject("Something went wrong" + errorMessage)
    }
})
//.then(message => console.log(message))
//.catch(errorMessage => console.log(errorMessage));



function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error;
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 4000);
    });
}



// IIFE
(async function callMyCustomPromise() {
    try {
        const message = await somethingGoodSomethingBad();
        console.log(message);
    } catch (errorMessage) {
        console.log(errorMessage);
    }
})()



//somethingGoodSomethingBad()
//.then(message => console.log(message));


//Java is procedual




