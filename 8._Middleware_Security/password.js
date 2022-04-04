//you should normally work with bcrypt in your routes

import bcrypt from "bcrypt";
const saltRounds = 12;
const plaintextPassword = "hunter12";
const hashedPassword = "$2b$12$MDY/xtNuWd5ExS2ontsxUeETaCqAFFkVubknuEUASKS6uwvO3SFDW"

//this will be done in the specific router that is relevant
async function loginRouter() {
    // this line checks if the password is the same and returns true or false
    const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
    console.log(isSame);
}

// hashed passwords can be done with promises, async/await and something else i didnt hear
// this will be used in the post request when you sign up
async function signupRouter() {
    // this generates a new hashed password
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
    console.log(hashedPassword);
}

//Man kan helt fjerne function {}

//signupRouter();
loginRouter();