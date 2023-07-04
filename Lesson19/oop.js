/* 
  OOP - Object Oriented programming
  FP - Functional programming


  OOP:  state is usually stored in objects and can be modified through methods 
  FP: state is immutable, and functions are designed to transform data rather than mutate it

  OOP: classes encapsulates related data and behavior
  FP: problems are broken down into smaller, composable functions that can be combined to solve larger problems.

*/

class Person {
  constructor (firstName, age) {
    // "Private" / internal values of a class are usually called with _
    this._firstName = firstName;
    this._age = age;
  }

  get firstName () {
    console.log('Getter method called');
    return this._firstName.toUpperCase();
  }

  set firstName (firstNameParam) {
    console.log('Setter method called');
    return this._firstName = firstNameParam;
  }
  get age () {
    return this.age;
  }

  set age (age) {
    return this.age = age;
  }

  greet () {
    console.log('Hello ' + this._firstName);
  }

  count () {
    for (let i= 0; i< 11; i++) {
      console.log(i);
    }
  }
};

const john = new Person('John', 30);
const karen = new Person('Karen', 40);
john.greet();
karen.greet();
console.log(john.firstName);
john.firstName = 'Jane';
console.log(john.firstName);
// DO not update internal value directly!
// john._firstName = 'Joe';
// console.log(john.firstName);

class Animal {
  constructor(name, age, numberOfLegs, sound) {
    this._name = name;
    this._age = age;
    this._numberOfLegs = numberOfLegs;
    this._sound = sound;
  }

  greet () {
    if (this._sound) {
      console.log(this._sound);
    } else {
      console.log('Default Animal greeting');
    }
  }

  describeAnimal () {
    console.log('Name: ' + this._name + ', age: ' + this._age + ', numberOfLegs: ' + this._numberOfLegs);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age, 4, 'Voff');
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age, 4, 'Meuw');
  }
}

class Duck extends Animal {
  constructor(name, age) {
    super(name, age, 0, 'Quack');
  }
}

const dog1 = new Dog('Dog1', 2);
const dog2 = new Dog('Dog2', 3);


const cat1 = new Cat('Cat1', 1);
const cat2 = new Cat('Cat2', 2);

dog1.describeAnimal();
dog1.greet();

cat2.describeAnimal();
cat2.greet();

const duck1 = new Duck('Duck1', 1);
duck1.describeAnimal();
duck1.greet();











