// set true to run TDD tests
const TEST = false;

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
 * @returns {any} Returns the user's prompt response in lowercase if it matches any values in the array
 */
function playerSelection() {
  let playerChoice;

  while (!options.some(val => val === playerChoice)) {
    playerChoice = prompt("Please type rock, paper, or scissors:");
  }
  return playerChoice.toLowerCase();
}

// playerSelection TDD:
// Cannot be tested using TDD
