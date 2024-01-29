//var scopenya global, bisa outside of the function
//let scopenya local, tidak bisa outside of the function

let number2 = 20;
let arrNum;

arrNum = [1, 2, 3, 4];
console.log(arrNum);

if (true) {
  var number = 10;
  console.log("Inside the function: ", number);
}
console.log("Outside of the funciton: ", number);

// console.log(number);no
