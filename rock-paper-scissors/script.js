// create array of valid inputs
const options = ["rock", "paper", "scissors"];

// returns a random input for the computer to play
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)]
}
