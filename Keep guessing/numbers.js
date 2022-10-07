// random value generated
let y = Math.floor(Math.random() * 100 + 1);
// counting the number of guesses
// made for correct Guess
let guess = 0;

document.getElementById("submitguess").onclick = function () {
  console.log("guess submitted");
  // number guessed by user
  let x = document.getElementById("guessField").value;

  if (x == y) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
  } else if (x > y) {
    /* if guessed number is greater
				than actual number*/
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
};

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
