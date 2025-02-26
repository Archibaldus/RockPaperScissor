// Event Listener for the buttons
const buttons = document.querySelectorAll("button");

// define the choices and initial scores
const choices = ["rock", "paper", "scissors"];
let humanScore = 0,
  computerScore = 0;

// get compute choice
const ComputerChoice = () => {
  const compCoice = document.querySelector("#computer-choice");
  let randomChoice = Math.floor(Math.random() * 3);
  console.log("computer choice: " + choices[randomChoice]);
  compCoice.textContent = choices[randomChoice];
  return choices[randomChoice];
};

const playRound = (humanChoice, computerChoice) => {
  const currentGame = document.querySelector("#current-game");
  if (humanChoice === computerChoice) {
    currentGame.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    currentGame.textContent = "You win!";
    // console.log("You win!");
  } else {
    computerScore++;
    currentGame.textContent = "You lose!";
    // console.log("You lose!");
  }
};

const updateScore = () => {
  const humanScoreDisplay = document.querySelector("#player");
  const computerScoreDisplay = document.querySelector("#computer");

  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
};

// reset the game
const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  updateScore();
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanSelection = button.id;
    let computerSelection = ComputerChoice();
    playRound(humanSelection, computerSelection);
    updateScore();
    if (humanScore === 5 || computerScore === 5) {
      const winnerSpan = document.querySelector("#winner");
      if (humanScore > computerScore) {
        winnerSpan.textContent = "You win the game!";
        alert("You win the game!");
      } else {
        winnerSpan.textContet = "You lose the game!";
        alert("You lose the game!");
      }
      // wait for 5 seconds before reset the game
      setTimeout(() => {
        resetGame();
        winnerSpan.textContent = "None";
      }, 5000);
    }
  });
});
