function getComputerChoice() {
  let selection = getRandomInt(3);
  let text;
  if (selection == 0) text = "rock";
  if (selection == 1) text = "paper";
  if (selection == 2) text = "scissors";
  console.log("computer picked " + text);
  return selection;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPlayerSelection() {
  let selected = prompt("enter rock paper or scissors");
  console.log("player picked " + selected);
  if (selected == "rock") return 0;
  if (selected == "paper") return 1;
  if (selected == "scissors") return 2;
}

function playRound(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) {
    return 2;
  }
  if (Math.abs(computerSelection, playerSelection) == 1) {
    return computerSelection > playerSelection ? 0 : 1;
  } else {
    return computerSelection < playerSelection ? 0 : 1;
  }
}

let winner = playRound(getComputerChoice(3), getPlayerSelection());

if (winner == 0) {
  console.log("Computer wins!");
} else if (winner == 1) {
  console.log("Player wins!");
} else {
  console.log("It's a draw!");
}
