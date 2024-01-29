const gacha = (guess) => {
  console.log("Welcome to gacha");

  return new Promise((resolve, reject) => {
    if (guess === "even") {
      resolve("You win!");
    }

    reject(new Error("You Lose!"));
  });
};

gacha("even")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
