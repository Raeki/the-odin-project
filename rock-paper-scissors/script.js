const options = ["rock", "paper", "scissors"];

function computerPlay() {
  return options[Math.floor(Math.random() * options.length)]
}
