// create array of valid inputs
const options = ["rock", "paper", "scissors"];

// returns a random input for the computer to play
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)]
}

// prompt the human player for their choice and return a sanitized version
function playerSelection(){
  const playerChoice = prompt('Please type rock, paper, or scissors:);
  if (options.some(prompt)) {
  return prompt.toLowerCase();
  } else {
    throw 'Please choose rock, paper, or scissors.';
  }
}

