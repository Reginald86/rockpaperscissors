let choices = ["rock", "paper", "scissors"];
let player = "";
let computer = "";
let rounds = 1;
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");
let tiesDisplay = document.getElementById("ties");
let roundDisplay = document.getElementById("rounds");
let result = document.getElementById("result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function playerSelection() {
  rock.addEventListener("click", () => {
    player = "rock";
    alert(`player shoots ${player}`);
    computerSelection();
    playGame();
  });

  paper.addEventListener("click", () => {
    player = "paper";
    alert(`player shoots ${player}`);
    computerSelection();
    playGame();
  });

  scissors.addEventListener("click", () => {
    player = "scissors";
    alert(`player shoots ${player}`);
    computerSelection();
    playGame();
  });
}

function computerSelection() {
  computer = choices[Math.floor(Math.random() * 3)];
  alert(`computer shoots ${computer}`);
}

function playGame() {
  if (player === computer) {
    ties++;
    tiesDisplay.innerText = `Ties: ${ties}`;
    result.innerText = "Result: Tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    result.innerText = `Result: Player's ${player} defeated Computer's ${computer}`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    result.innerText = `Result: Computer's ${computer} defeated Player's ${player}`;
  }
  rounds++;
  roundDisplay.textContent = `Round: ${rounds}`;
}

function restartGame(){
player = "";
computer = "";
rounds = 1;
playerScore = 0;
computerScore = 0;
ties = 0;
playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
tiesDisplay.innerText = `Ties: ${ties}`;
roundDisplay.textContent = `Round: ${rounds}`;
result.innerText = "Result: ";
}

let restart = document.getElementById("restart");
restart.addEventListener("click", restartGame);

playerSelection();