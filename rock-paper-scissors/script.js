// create array of valid inputs
const options = ["rock", "paper", "scissors"];

// returns a random input for the computer to play
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)]
}

// prompt the human player for their choice and return a sanitized version
function playerSelection(){
  // request input from player
  const playerChoice = prompt('Please type rock, paper, or scissors:);
  
  // sanitize input then return it
  if (options.some(playerChoice)) {
  return playerChoice.toLowerCase();
  } else {
    throw 'Please choose rock, paper, or scissors.';
  }
}

