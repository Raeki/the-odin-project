function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}
// set true to run TDD tests
const TEST = false;

// create array of valid inputs
const options = ["rock", "paper", "scissors"];

/**
 * @param {array} arr - an array of values to select from randomly
 * @returns {any} Returns a random value from an array
 */

function computerPlay(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// computerPlay TDD:
if (TEST) {
  test(
    true,
    options.some(val => val === computerPlay(options))
  );
}

/**
 * @param {array} arr - an array of valid values to check the user's prompt response against
 * @returns {string} Returns the user's prompt response in lowercase if it matches any values in the array
 */
function playerSelection(arr) {
  let playerChoice;

  while (!arr.some(val => val === playerChoice)) {
    playerChoice = prompt("Please type rock, paper, or scissors:");
  }
  return playerChoice.toLowerCase();
}

// playerSelection TDD:
// difficult to test using TDD

/**
 * @returns {number} returns the result of compareChoices.
 */
function playRound() {
  // determine the players choice and the computers random choice
  const playerChoice = playerSelection(options);
  const computerChoice = computerPlay(options);

  // compare the choices to determine a winner and print the results
  return compareChoices(playerChoice, computerChoice);
}

/**
 * @param {string} pC - the players selection
 * @param {string} cC - the computers selection;
 * @returns {number} returns a -1, 0, or 1 depending on whether the human loses, ties, or wins the round
 */
function compareChoices(pC, cC) {
  if (
    (pC === "rock" && cC === "paper") ||
    (pC === "paper" && cC === "scissors") ||
    (pC === "scissors" && cC === "rock")
  ) {
    console.log(`You lose! ${cC} beats ${pC}.`);
    return -1;
  } else if (
    (pC === "rock" && cC === "scissors") ||
    (pC === "paper" && cC === "rock") ||
    (pC === "scissors" && cC === "paper")
  ) {
    console.log(`You win! ${pC} beats ${cC}.`);
    return 1;
  } else {
    console.log(`You tie! ${pC} vs. ${cC}.`);
    return 0;
  }
}

/**
 * @param {number} rounds
 */
function game(rounds) {
  let wins = 0;
  for (let i = 0; i < rounds; i++) {
    wins += playRound();
    if (wins === 0) {
      console.log("Tiebreaker!");
      i--;
    }
  }
  return printWinner(wins);
}

/**
 * @param {number} wins
 */
function printWinner(wins) {
  if (wins > 0) {
    console.log("You won!");
  } else {
    console.log("The computer won...");
  }
}
