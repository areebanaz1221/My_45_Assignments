// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(size: string = "Large", message:
string = "I love Typescript"): void
{
    return console.log(`Size: ${size}, Message: '${message}'`);

}

// Large shirt with default message
makeShirt(); // Output: Size: Large, Message: 'I love TYpescript'

// Medium shirt with default message
makeShirt("Medium"); // Output: Size Medium, Message: 'I love Typescript'

// Custom shirt with a different message and size
makeShirt("Small", "Hello, TypeScript!");  // Output: Size: Small, Message: 'Hello, TypeScript!'

