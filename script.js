
const ROCK = document.querySelector("#rock")
ROCK.addEventListener("click", rockClick);

function rockClick(){
let result = playRound("rock", getComputerChoice());
document.getElementById("results").innerHTML =  result;
gameOver();
} 



const SCISSORS = document.querySelector("#scissors")
SCISSORS.addEventListener("click", scissorsClick);

  function scissorsClick(){
  let result = playRound("scissors", getComputerChoice());
  document.getElementById("results").innerHTML =  result;
  gameOver();
  } 


const PAPER = document.querySelector("#paper")
PAPER.addEventListener("click", paperClick);

function paperClick() {
let result = playRound("paper", getComputerChoice());
document.getElementById("results").innerHTML =  result;
gameOver();
} 

const RESTART = document.querySelector("#restart")
RESTART.addEventListener("click", restart);
function restart() {
  ROCK.addEventListener("click", rockClick);
  SCISSORS.addEventListener("click", scissorsClick);
  PAPER.addEventListener("click", paperClick);
  document.getElementById("results").innerHTML =  result = "";
  document.getElementById("computer").innerHTML = computerScore = "";
  document.getElementById("player").innerHTML = playerScore = "";
  document.getElementById("tie").innerHTML = tie = "";
  document.getElementById("roundplays").innerHTML = roundsplayed = "";
}






function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

let roundsplayed = 0;
let playerScore = 0;
let computerScore = 0;
let tie = 0;

function playRound(playerSelection, computerSelection) {


  if(playerSelection === computerSelection) {
    roundsplayed++
    tie++;
    document.getElementById("roundplays").innerHTML = (roundsplayed +1);
    document.getElementById("tie").innerHTML = tie;
    return "It's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundsplayed++
    playerScore++;
    document.getElementById("roundplays").innerHTML = (roundsplayed + 1);
    document.getElementById("player").innerHTML = playerScore;
    return `Player wins! ${playerSelection} beats ${computerSelection}`;
  } else {
    roundsplayed++
    computerScore++;
    document.getElementById("roundplays").innerHTML = (roundsplayed + 1);
    document.getElementById("computer").innerHTML = computerScore;
    return `Computer wins! ${computerSelection} beats ${playerSelection}`;
  }
}


function gameOver() {
    if (playerScore === 5) {
    let result = "Game over - Player wins! Click restart to play again.";
    document.getElementById("results").innerHTML =  result;
    stopPlay();
      } else if (computerScore === 5) {
        let result = "Game over - Computer wins! Click restart to play again.";
        document.getElementById("results").innerHTML =  result;   
        stopPlay();
  }
}


function stopPlay(){
  ROCK.removeEventListener("click", rockClick);
  SCISSORS.removeEventListener("click", scissorsClick);
  PAPER.removeEventListener("click", paperClick);
} 

function restart() {
  ROCK.addEventListener("click", rockClick);
  SCISSORS.addEventListener("click", scissorsClick);
  PAPER.addEventListener("click", paperClick);
  document.getElementById("results").innerHTML =  result = "";
  document.getElementById("computer").innerHTML = computerScore = "";
  document.getElementById("player").innerHTML = playerScore = "";
  document.getElementById("tie").innerHTML = tie = ""; 
  document.getElementById("roundplays").innerHTML = roundsplayed = ""; 
}
  



