// alert("hello world!");

console.log("Hello World!");

// Variables 
console.log("Variables and Constants");
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;

console.log(global1);
console.log(functionScoped);
console.log(blockScoped);

const constant1 = global1 + functionScoped - blockScoped;
console.log(constant1);

// Variables Types
console.log("Variable types");
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// Boolean variables
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);

// If Else
console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// Ternary Conditional Operator
console.log("Ternary Conditional Operator");
const loggedIn = true;
const greeting = loggedIn ? "Welcome!" : "Please Login";
console.log(greeting);


// Functions
console.log("Legacy ES5 function")
function add (a, b) {
    return a + b;
}

const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// ES6
console.log("New ES6 functions")
const subtract = (a, b) => {
    return a - b;
}

const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// Implied Return
console.log("Implied Return")
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// Parenthesis and parameters
console.log("Parenthesis and parameters")
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);
