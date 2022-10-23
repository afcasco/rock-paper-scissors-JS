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

function getPlayerSelection(selected) {
  if (selected == "rock") return 0;
  if (selected == "paper") return 1;
  if (selected == "scissors") return 2;
}

function selectedToString(cpu) {
  if (cpu == 0) return "rock";
  if (cpu == 1) return "paper";
  if (cpu == 2) return "scissors";
}

function winnerToString(winner) {
  if (winner == 0) return "CPU WON";
  if (winner == 1) return "PLAYER WON";
  if (winner == 2) return "IT'S A DRAW";
}

function getRoundResult(computerSelection, playerSelection) {
  let winner;
  if (computerSelection == playerSelection) {
    winner = 2;
  }
  if (Math.abs(computerSelection, playerSelection) == 1) {
    winner = computerSelection > playerSelection ? 0 : 1;
  } else {
    winner = computerSelection < playerSelection ? 0 : 1;
  }

  /* alert(
    "player picked: " +
      selectedToString(playerSelection) +
      "\ncpu picked: " +
      selectedToString(computerSelection) +
      "\nThe winner is: " +
      winnerToString(winner)
  );*/

  return winner;
}

function game() {
  let cpuRounds = 0;
  let playerRounds = 0;
  for (let i = 0; i < 5; i++) {
    let winner = getRoundResult(getComputerChoice(3), getPlayerSelection());

    if (winner == 0) {
      console.log("Computer wins!");
      cpuRounds++;
    } else if (winner == 1) {
      console.log("Player wins!");
      playerRounds++;
    } else {
      console.log("It's a draw!");
    }
  }

  return cpuRounds > playerRounds ? 0 : 1;
}

function removeTransition(button) {
  button.addEventListener("mouseup", function changeclass(event) {
    console.log("clicked!", event);
    button.classList.remove("clicked");
    console.log(button.id);
  });
}

function showRoundWinner(user, cpu, winner) {
  const result = document.querySelector(".status");
  const toAdd = document.querySelector("h1");
  toAdd.textContent =
    "cpupick: " +
    selectedToString(cpu) +
    "\nuserpick: " +
    selectedToString(user) +
    "\nresult: " +
    winnerToString(winner);
}

function playeOneRound(buttons) {
  buttons.forEach((button) => {
    button.addEventListener("mousedown", function changeclass(event) {
      console.log("clicked!", event);
      button.classList.add("clicked");
      setTimeout(removeTransition(button), 500);
      let userPick = getPlayerSelection(button.id);
      let cpuPick = getComputerChoice();
      let winner = getRoundResult(cpuPick, userPick);

      showRoundWinner(userPick, cpuPick, winner);
    });
  });
}

const buttons = document.querySelectorAll(".option");

playeOneRound(buttons);
let playerWon = 0;
