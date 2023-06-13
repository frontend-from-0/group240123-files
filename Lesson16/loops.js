// 1. Write a loop that prints out the numbers from 1 to 10.
for (let i = 1; i<=10; i++) {
    console.log(i);
}
console.log('- - - - - - - - - - - - - - - - - ');
// 2. Write a loop that prints out the odd numbers from 1 to 20.
// 1,3,5,7...
for (let i = 1; i<20; i = i+2){
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 3. Write a loop that prints out the even numbers from 1 to 20.
// 2, 4, 6...
for (let i =2; i<=20; i+=2) {
    console.log(i);
}

console.log('- - - - - - - - - - - - - - - - - ');
// 4. Write a loop that finds the maximum number in an array of numbers.
const findMaxNumberInArray = [300, 10, 23, 42, 505, 12, 7, 4, 900];
let num = findMaxNumberInArray[0];
for(let i = 0; i<findMaxNumberInArray.length; i++) {
  if(num<findMaxNumberInArray[i+1]){
    num = findMaxNumberInArray[i+1];
  }
}
console.log(num);

console.log('- - - - - - - - - - - - - - - - - ');
// 5. Write a loop that finds the minimum number in an array of numbers.
const findMinNumberInArray = [1, 10, 23, 42, 0, 12, 7, 0];
let num1 = findMinNumberInArray[0];

for (let i= 1; i<findMinNumberInArray.length; i++) {
    if(num1>findMinNumberInArray[i]) {
        num1 = findMinNumberInArray[i];
    }
}
console.log(num1);
console.log('- - - - - - - - - - - - - - - - - ');
// 6. Write a loop that reverses a given string.
const string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
let newString = "";
for (let i = string.length - 1; i >= 0; i--) {
  newString = newString + string[i]; 
  // . + t 
  // .t + i
  // .ti + l
}
console.log(newString);

const arrayEx6 = [1,2,3,5,242,32,23,232,112,233];
let newArray = [];

for(let i = arrayEx6.length-1; i >= 0; i--){
    newArray.push(arrayEx6[i]);
}
console.log(newArray);

console.log('- - - - - - - - - - - - - - - - - ');
// 7. Write a while loop that counts from 10 to 1 and prints out each number.
let i = 10;
while(i>=1) {
    console.log(i);
    i--;
}
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

console.log('- - - - - - - - - - - - - - - - - ');
// 8. Write a while loop that generates random numbers between 1 and 10 until a number greater than 8 is generated, and then prints out the total number of iterations.
function getRandomNumber () {
  return Math.floor(Math.random()*10)+1;
} 

let iteration = 1;
let randomNumber = getRandomNumber();
let randomNumbers = [randomNumber];

while(randomNumber <= 8){
  randomNumber = getRandomNumber();
  randomNumbers.push(randomNumber);
  iteration++;
}

console.log('Iterations:', iteration, 'random number: ', randomNumber, 'Numbers: ', randomNumbers);

console.log('- - - - - - - - - - - - - - - - - ');
// 9. Write a do-while loop that counts from 1 to 10 and prints out each number.
let number = 1;
do {
    console.log(number);
    number++;
} while (number<=10);

// 10. Write a for...in loop that prints out the keys and values of an object.
const person = {name: "John", surname: "Doe", age: 30, city: "New York"};
// Array olsaydi boyle olurdu: ["John", "Doe", 30 , "New York"];
// Array element position numbers: 0, 1, 2, 3
// Object keys: name, surname, age, city 

for (const key in person){
    console.log(`${key}: ${person[key]}`);
}

// 11. Write a for...in loop that sums the values of an object.
const obj = {a: 10, b: 20, c: 30, d: 23};
let sum = 0;
for(const key in obj) {
    sum+= obj[key];
}
console.log(sum);