const choices = ["rock", "paper", "scissors"];
let humanScore = 0,
  computerScore = 0;

const ComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);
  console.log("computer choice: " + choices[randomChoice]);
  return choices[randomChoice];
};

const getHumanChoice = () => {
  let userChoice = prompt("Enter your choice: ");
  if (!choices.includes(userChoice)) {
    alert("Invalid choice. Please enter a valid choice.");
    return getHumanChoice();
  }
  return userChoice;
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log("You win!");
  } else {
    computerScore++;
    console.log("You lose!");
  }
};

const playGame = () => {
  rounds = 2;
  for (let i = 0; i < rounds; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = ComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
  console.log(humanScore > computerScore ? "You win!" : "You lose!");
};
