// pure function adalah function yang hasilnya akan selalu sama apapun argumennya
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

// arrow function
const divide = (a, b) => {
  // bisa dipersingkat dengan menghilangkan curly bracket
  return a / b;
};
console.log(divide(10, 2));

// function as a parameter
function performOperation(x, y, operation) {
  return operation(x, y);
}
const result = performOperation(8, 4, (a, b) => a * b); // you can change what the function do by changing the last parameter
console.log(result);

// immediately invoked function
let sum = (function (a, b) {
  return a + b;
})(5, 10);
console.log(sum);

// function composition
function double(x) {
  return x * 2;
}

function increment(x) {
  return x + 1;
}

function compose(func1, func2) {
  return function (x) {
    return func1(func2(x));
  };
}
let doubleIncrement = compose(double, increment);
console.log(doubleIncrement(5));

// high order function
function callbackFunction() {
  console.log("I am a callback function");
}

function higherOrderFunction(func) {
  console.log("I am a higher order function");
  func();
}

higherOrderFunction(callbackFunction);
