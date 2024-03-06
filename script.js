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
  
const compSelection = getComputerChoice();
console.log("Computer chooses: " + compSelection);
  




function getPlayerChoice() {
    let player = prompt("Choose between: rock, paper, scissors").toLowerCase();
    return player;
   }
  
  const playerSelection = getPlayerChoice(); 
  console.log("Player chooses: " + playerSelection.toLowerCase());
  
  
  
  
  function playRound(playerSelection, compSelection) {
    if (playerSelection === compSelection) {
      return "It's a tie";
    } else if ( (playerSelection === "rock" && compSelection === "scissors") ||
     (playerSelection === "paper" && compSelection === "rock") ||
    (playerSelection === "scissors" && compSelection === "paper") 
      ){
      return `${playerSelection} beats ${compSelection}.  Player wins!`;
    }  else {
     return `${compSelection} beats ${playerSelection}. The Computer wins!`;
    } 
  }
  
  console.log(playRound(playerSelection, compSelection));