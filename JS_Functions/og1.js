// 1. Named function to find largest number
function findLargest(a, b) {
    if (a > b) {
        console.log("Largest number is:", a);
    } else {
        console.log("Largest number is:", b);
    }
}

// Function calls
findLargest(10, 20);
findLargest(50, 30);

// 2. Student pass/fail function
function checkResult(name, marks) {
    if (marks >= 35) {
        console.log(name + " has Passed");
    } else {
        console.log(name + " has Failed");
    }
}

checkResult("Ravi", 40);
checkResult("Anu", 25);

// 3. Price after discount
function calculateFinalPrice(price, discount) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}

console.log(calculateFinalPrice(1000, 10)); // 900

// 4. Function with name, age, isStudent
function getUserDetails(name, age, isStudent) {
    return `${name} is ${age} years old and is ${isStudent ? "a student" : "not a student"}`;
}

console.log(getUserDetails("Pavan", 21, true));

// 5. Anonymous function (square)
let square = function(num) {
    return num * num;
};

console.log(square(5)); // 25

// 6. Function with callback   
function processNumber(num, callback) {
    return callback(num);
}

// Callbacks
function double(n) {
    return n * 2;
}

function squareNum(n) {
    return n * n;
}

console.log(processNumber(5, double));    // 10
console.log(processNumber(5, squareNum)); // 25

// 7. Higher-order function
function applyOperation(num, operation) {
    return operation(num);
}

// Operations
const multiplyBy2 = (n) => n * 2;
const add10 = (n) => n + 10;

console.log(applyOperation(5, multiplyBy2)); // 10
console.log(applyOperation(5, add10));       // 15

// 8. Arrow functions
// Add two numbers
const add = (a, b) => a + b;

// Factorial
const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

console.log(add(3, 4));       // 7
console.log(factorial(5));    // 120

// 9. IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("This is an IIFE function!");
})();

// 10. Pure function
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(2, 3)); // 5

// 12. Curried function
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multiply(2)(3)(4)); // 24

// 13. Array with callback
function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// Callback
const squareFunc = (n) => n * n;

console.log(processArray([1, 2, 3], squareFunc)); // [1,4,9]

// 14. User object with arrow + callback
const processUser = (user, callback) => {
    return callback(user);
};

const user = {
    name: "Pavan",
    skills: ["HTML", "CSS", "JS"]
};

const formatUser = (u) => {
    return `${u.name} knows ${u.skills.length} skills`;
};

console.log(processUser(user, formatUser));
// Output: Pavan knows 3 skills
