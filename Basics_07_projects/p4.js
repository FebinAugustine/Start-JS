document.addEventListener("DOMContentLoaded", function () {
  let randomNum = parseInt(Math.random() * 100 + 1);

  const submit = document.querySelector("#subt");
  const userInput = document.querySelector("#guessField");
  const guessSlot = document.querySelector(".prvGuess");
  const remaining = document.querySelector(".remGuess");
  const lowOrHi = document.querySelector(".lowOrHi");
  const resultParas = document.querySelector(".resultParas");

  const p = document.createElement("p");

  let prvGuess = [];
  let numGuess = 1;
  let playGame = true;

  if (playGame) {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      console.log(guess);
      validateGuess(guess);
    });
  }

  function validateGuess(guess) {
    if (isNaN(guess)) {
      alert("Please enter a valid number");
    } else if (guess < 1) {
      alert("Please enter a number greater than 0");
    } else if (guess > 100) {
      alert("Please enter a number less than 100");
    } else {
      prvGuess.push(guess);

      if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was: ${randomNum}`);
        endGame();
      } else {
        displayGuess(guess);
        checkGuess(guess);
      }
    }
    //
  }

  function checkGuess(guess) {
    if (guess === randomNum) {
      displayMessage("You Won..!!");
      endGame();
    } else if (guess < randomNum) {
      displayMessage("Your guess is tooo low....!");
    } else if (guess > randomNum) {
      displayMessage("Your guess is tooo high....!");
    }
    //
  }

  function displayGuess(guess) {
    guessSlot.innerHTML += `${guess}, `;
    userInput.value = "";
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

    //
  }

  function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
    //
  }

  function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    resultParas.appendChild(p);
    playGame = false;
    newGame();
    //
  }

  function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", (e) => {
      randomNum = parseInt(Math.random() * 100 + 1);
      prvGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = "";
      remaining.innerHTML = `${11 - numGuess}`;
      userInput.removeAttribute("disabled");
      resultParas.removeChild(p);
      lowOrHi.innerHTML = "";
      playGame = true;
    });

    //
  }
});
