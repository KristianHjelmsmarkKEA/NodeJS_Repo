function doActionWtihSomeone(anyFuntionReference, name) {
    anyFuntionReference(name);
}

const running = (name) => console.log(`${name} is running `);

doActionWtihSomeone(running, "Anders");


doActionWtihSomeone(name => console.log(`${name} is passing the joint`), "Gustav")