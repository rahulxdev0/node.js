
function greet() {
    console.log("Hello, World!");
}

function greetWithName(name) {
    console.log(`Hello, ${name}!`);
}

// Export the greet function
module.exports = {
    greet,
    greetWithName
};