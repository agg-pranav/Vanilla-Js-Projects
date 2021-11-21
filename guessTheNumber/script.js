"use strict";

// function check() {
//   var val = document.querySelector("p.message").textContent;
//   console.log(val);
//   var check = document.querySelector("button .check");
//   //   check.addEventListener("click", () => console.log(val));
// }
const number = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(typeof guess);
  let score = Number(document.querySelector(".score").textContent);
  if (!guess) {
    //   alert('Ente')
    document.querySelector(".message").textContent = "🚨 No Number!";
  } else {
    let userGuess = Number(guess);
    if (userGuess === number) {
      document.querySelector(".number").textContent = number;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector("input").style.backgroundColor = "#60b347";
      document.querySelector(".message").textContent = "🎉 Congratulations!!";
      let highScore = document.querySelector(".high").textContent;
      document.querySelector(".high").textContent =
        Number(highScore) > Number(score) ? highScore : score;
    } else if (userGuess < number) {
      document.querySelector(".message").textContent = "⬇ Too low";
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "⬆ Too High";
      score -= 1;
      document.querySelector(".score").textContent = score;
    }
  }
});
