// String
let name = 'Richard';

let firstName = 'Richard';
let lastName = 'Garza';

// Number
const interestRate = 3;

// Boolean
let isApproved = true;

// Undefined
let anything;

// Null
let nothing = null;

// Object

let richard = {
  name: 'Richard',
  age: 25,
  color: 'Brown',
  hasSenseOfHumor: true,
};

// Array

let colors = ['red', 'blue', 'yellow'];
colors[3] = 'black';

// Functions

const greet = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

const add = (firstNum, secondNum) => {
  return firstNum * secondNum;
};

greet('John', 'Garza');
console.log(add(4, 5));
