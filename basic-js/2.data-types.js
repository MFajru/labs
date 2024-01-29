// Array
let myArr = [1, 2, 3, 4, 5, 6, "abc"];
console.log(myArr);
console.log(myArr[myArr.length - 1]);

// Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let key = "age";
console.log(person[key]);
console.log(person.age);
console.log(person.firstName);
console.log(person[0]);

// Type of (check type of the variable)
console.log(typeof person.age);

// Object methods
console.log(Object.keys(person)); // take the keys of object and return it to string
console.log(Object.values(person)); // take the person value

console.log(typeof myArr);
console.log(Array.isArray(myArr)); // return boolean

const x = 10;

console.log(x);
