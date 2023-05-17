// Special words
/*
Declare variables:
  var - the old keyword to declare variables
  let - this is to declare a variable that can be changed
  const ("constant") - this is to declare a variable that should not be changed
*/

let name = "Önder";
console.log('Initial name', name);
name = 'John';
console.log('New name', name);
const year = 2023;
console.log('Initial year', year);
// year = 2024; TypeError
// console.log('New year', year);

/* Other keywords:
  function - used to define a function
  return - usually used inside a function to return s result

  new
  import
  export
  from
  if
  else
  switch
  for
  in
  do
  while
 * 
 */

  function greet (name) {
    // console.log('Hi, '+ name);
    const sum = 1 + 3;
    console.log(sum);
    let number1 = sum / 2;
    console.log(number1);
    return 'Hi, '+ name;
    // Code after return statement won't run
    let number2 = number1 + 2;
    console.log(number2);
    console.log('After return statement');
  }

  console.log(greet('Önder'));
  console.log(greet('Anna'));
  console.log(greet('John'));

  // let new = "new"; 
  // console.log(new);

  // Today's date
  const todaysDate = new Date();
  console.log(todaysDate);

  console.log(stringExercise2);




