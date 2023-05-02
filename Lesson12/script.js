console.log('In the external js file');
// Line comment

/*
This is 
a multi line
comment
*/

// Variables: var, let, const
// Usually, camelCase is used to name variables in JS
var myVariable = 'This is my string variable';
let anotherVariable = 4;
console.log('myVariable 1:', myVariable);
console.log('anotherVariable 1:', anotherVariable);


myVariable = 'A new string';
console.log('myVariable 2:', myVariable);

anotherVariable = 'This is also a string now!';
console.log('anotherVariable 2:', anotherVariable);


// THIS_IS_CALLED_SCREAMING_SNAKE_CASE and usually used for (global) constants in JS
const THIS_IS_MY_CONSTANT = 'This is a constant';
console.log('THIS_IS_MY_CONSTANT 1:', THIS_IS_MY_CONSTANT);

// This is invalid code in JS!!
/* 
  THIS_IS_MY_CONSTANT = 0;
  console.log('THIS_IS_MY_CONSTANT 2:', THIS_IS_MY_CONSTANT);
*/

// Use double or single quotes for strings in JS
// let myString = "";
let myString = 'This is a string type variable'; // String type
let myNumber = 10; // Number type
let myBoolean = true; // Boolean type: either true or false
let myUndefined = undefined; // Undefined type
let myUndefined2; // Undefined type
let myNull = null; // Null type - absence of value (or object)
let mySymbol = Symbol(); // Symbol type

let myObject = {
  thisIsAnObjectKey: 'a string',
  thisIsAnotherObjectKey: true,
  oneMoreKey: 4,
  key3: {},
};

// In array, count starts from 0
let myArray = [1, 2, true, 'string', null, undefined]; // Array type - it is a special 
// type which is actually just an object
// {
//   0: 1,
//   1: 2, 
//   2: true,
//   ...
// }

function doSomething() {
  console.log('this is a function!');
}

console.log(myObject);
console.log(typeof myObject);
console.log(typeof myObject.thisIsAnotherObjectKey);







