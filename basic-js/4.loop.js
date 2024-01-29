let newArr = [];

// for loop
for (let i = 0; i <= 3; i++) {
  newArr[i] = i + 1;
}
console.log(newArr);

// while loop
let counter = 1;
while (counter <= 3) {
  console.log(counter);
  counter++;
}

// do while loop
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 0);

// itterate over elements
let colors = ["red", "yellow", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
