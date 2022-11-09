// Game

let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

// UI

const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const playerScorePara = document.getElementById("playerScorePara");
const computerScorePara = document.getElementById("computerScorePara");
const playerSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const endgameModal = document.getElementById("endgameModal");
const endgameMsg = document.getElementById("endgameMsg");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("restartBtn");

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));
restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", closeEndgameModal);

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal();
    return;
  }

  const computerSelection = getRandomChoice();
  playRound(playerSelection, computerSelection);
  updateChoices(playerSelection, computerSelection);
  updateScore();

  if (isGameOver()) {
    openEndgameModal();
    setFinalMessage();
  }
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "ROCK":
      playerSign.textContent = "";
      break;
    case "PAPER":
      playerSign.textContent = "";
      break;
    case "SCISSORS":
      playerSign.textContent = "";
      break;
  }

  switch (computerSelection) {
    case "ROCK":
      computerSign.textContent = "";
      break;
    case "PAPER":
      computerSign.textContent = "";
      break;
    case "SCISSORS":
      computerSign.textContent = "";
      break;
  }
}

function updateScore() {
  if (roundWinner === "tie") {
    scoreInfo.textContent = "It' a tie!";
  } else if (roundWinner === "player") {
    scoreInfo.textContent = "You won!";
  } else if (roundWinner === "computer") {
    scoreInfo.textContent = "You lost!";
  }

  playerScorePara.textContent = `Player ${playerScore}`;
  computerScorePara.textContent = `Computer ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function openEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function closeEndgameModal() {
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameModal.textContent = "You won!")
    : (endgameModal.textContent = "You lost!");
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  scoreInfo.textContent = "Choose your weapon";
  scoreMessage.textContent = "First to score 5 points wins the game";
  playerScorePara.textContent = "Player: 0";
  computerScorePara.textContent = "Computer: 0";
  playerSign.textContent = "❔";
  computerSign.textContent = "❔";
  endgameModal.classList.remove("active");
  overlay.classList.remove("active");
}

/* // declare choices array
const choices = ["rock", "paper", "scissors"];
console.log(choices);

// declare function for random computer choice
function getComputerChoice() {
  const randChoice = Math.floor(Math.random() * choices.length);
  return choices[randChoice];
}

// declare score variables
let playerScore = 0;
let computerScore = 0;

// declare the playRound function with multiple conditions for the game
function playRound(playerSelection, computerSelection) {
  // tie condition
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } // all other conditions
  else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    return "Paper beats Rock, You lose!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "Rock beats Scissors, You win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    return "Scissors beats Paper, You lose!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    return "Paper beats Rock, You win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    return "Rock beats Scissors, You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "Scissors beats Paper, You win!";
  } // consider typos
  else {
    return "error, try again";
  }
}

// run game
game(); */
