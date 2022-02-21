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


console.log("Arrays")
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

console.log(numberArray1)
console.log(stringArray1)
console.log(variableArray1)

// Array index and length
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

console.log(length1)
console.log(index1)

console.log("Add and remove data to arrays")

// add items
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item
numberArray1.splice(2, 1);
stringArray1.splice(1,1);

console.log(numberArray1);
console.log(stringArray1);

// Looping
console.log("For Loops")

for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// Map Functions
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(squares)
console.log(cubes)

// Find Function
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');

console.log(four)
console.log(string3)

// Find Index 
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

// Filter
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 == 0);
const oddNumbers = numberArray1.filter(a => a % 2 != 0);

console.log(numbersGreaterThan2)
console.log(evenNumbers)
console.log(oddNumbers)