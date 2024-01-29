// Immutable example
let str1 = "Hello";
let str2 = str1;

str1 = "World";
console.log(str1);
console.log(str2);

// Mutable example with object
let mutablePerson = {
  name: "Jane",
  age: 20,
};
console.log(mutablePerson);
// new object
let newMutablePerson = {
  ...mutablePerson,
  age: 29,
};
console.log(newMutablePerson);

// == hasilnya akan true, kalo === hasilnya false (=== melihat tipe datanya)
console.log(5 === "5");

let x = 7;
x = Object(x);
console.log(typeof x);

for (const key in mutablePerson) {
  console.log(key);
}
