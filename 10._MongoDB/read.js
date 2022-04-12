import db from "./createConnection.js";

const allTutorials = await db.tutorials.fint().toArray();
console.log(allTutorials);