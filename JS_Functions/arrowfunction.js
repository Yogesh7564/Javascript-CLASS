function processUser(name, age, callback) {
    console.log("Processing user data...");
    callback(name, age);
}

processUser("Virat", 35, (userName, userAge) => {
    console.log(`User Name: ${userName}, Age: ${userAge}`);
});

console.log("-----------------");

function calculate(a, b, operation) {
    const result = operation(a, b);
    console.log(`Result: ${result}`);
}

calculate(10, 20, (x, y) => x + y);

calculate(5, 4, (x, y) => x * y);
