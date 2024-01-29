const prompt = require("prompt-sync")();
const menu1 = "1";
const menu2 = "2";
const menu3 = "3";
const topUp = 50000;
const gachaPrice = 5000;
const prizeMoney = 100000;

function gacha(input) {
  console.clear();
  console.log(`Your number:\n${input}`);
  let gachaNum = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Gacha number:\n${gachaNum}`);
      if (input === gachaNum) {
        console.log("Congratulation, you win!\n");
        resolve(prizeMoney);
      }
      reject(new Error("Uh-oh you missed, don't give up and try again!\n"));
    }, 3000);
    console.log("Rolling the dice, please wait...");
  });
}

function isValidInput(input) {
  return new Promise((resolve, reject) => {
    if (input >= 0 && input < 9 && Number.isInteger(input)) {
      resolve(input);
    }
    reject(new Error("Input must be a number between 0-9\n"));
  });
}

function isEnoughBalance(balance) {
  return new Promise((resolve, reject) => {
    if (balance >= gachaPrice) {
      resolve(balance - gachaPrice);
    }
    reject(new Error("You don't have enough balance, please top-up first\n"));
  });
}

async function main() {
  let balance = 50000;
  let i = 0;
  while (i === 0) {
    console.log(`Your balance: ${balance}`);
    console.log("Menu");
    console.log("1. Start");
    console.log("2. Top up");
    console.log("3. Exit");
    const menu = prompt("Choose Menu: ");
    switch (menu) {
      case menu1:
        try {
          console.log("Please insert a number from 0-9:");
          let input = prompt();
          input = parseInt(input);
          const newBalance = await isEnoughBalance(balance);
          balance = newBalance;
          const numInput = await isValidInput(input);
          const prize = await gacha(numInput);
          balance += prize;
        } catch (err) {
          console.log(err.message);
        }
        break;
      case menu2:
        balance += topUp;
        console.clear();
        break;
      case menu3:
        i = 1;
        break;
    }
    // console.log(`Your new balance: ${balance}`);
  }
}

main();
