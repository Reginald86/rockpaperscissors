console.log("Welcome to a game of Rock Paper Scissors - Best of 5 rounds")

const rounds = 5;

function getComputerChoice () {
    let choice = Math.floor(Math.random () * 3);
      if (choice === 0) {
        return "rock";
      } else if (choice === 1) {
        return "paper";
      } else {
        return "scissors";
      }
    }


function getPlayerChoice() {
    let player = prompt("Choose between: rock, paper, scissors").toLowerCase();
    return player;
   }

  
 function playGame(){
 for(let i = 0; i < rounds; i++){
  let computerSelection = getComputerChoice();  
  // putting computerSelection and playerSelection in the function block instead of globally ensures they are re-initialized every time.  Globally only happens once.
  let playerSelection = getPlayerChoice();
  console.log (playRound(playerSelection, computerSelection));
  // if you use return instead of console.log - the function ends execution after the first return.  
 }
}
 
 
 function playRound(playerSelection, computerSelection){
   if(playerSelection === computerSelection) {
    return "It's a tie"
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
   } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}`;
   } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
   }
 }
  

playGame()
 









 


