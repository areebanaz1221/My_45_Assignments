"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
const make_shirt = (size, message) => {
    console.log(`Size: ${size}, Message: '${message}'`);
};
// Call the function
let size = "medium";
let message = "Typescript With Areeba";
make_shirt(size, message);
make_shirt("Large", "Typescript with Areeba");
