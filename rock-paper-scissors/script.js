const game = {
  playerWins: 0,
  compWins: 0,
  OPTIONS: ["rock", "paper", "scissors"],
  MAX_WINS: 5,

  /**
   * @param {string} choice - player's choice
   */

  play: function (choice) {
    const compChoice = this.computerPlay(this.OPTIONS);
    this.updateWins(this.compareChoices(choice, compChoice));
    this.updateWinsText();
    this.checkWins();
  },

  /**
   * @param {array} arr - an array of values to select from randomly
   * @returns {any} Returns a random value from an array
   */

  computerPlay: function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * @param {string} pC - the players selection
   * @param {string} cC - the computers selection;
   * @returns {number} returns a -1, 0, or 1 depending on whether the human loses, ties, or wins the round
   */

  compareChoices: function compareChoices(pC, cC) {
    // player loss
    if (
      (pC === "rock" && cC === "paper") ||
      (pC === "paper" && cC === "scissors") ||
      (pC === "scissors" && cC === "rock")
    ) {
      return -1;

      // player win
    } else if (
      (pC === "rock" && cC === "scissors") ||
      (pC === "paper" && cC === "rock") ||
      (pC === "scissors" && cC === "paper")
    ) {
      return 1;

      // tie
    } else {
      return 0;
    }
  },

  /**
   * @param {number} result - -1 for a computer win, 0 for a tie, 1 for a player win.
   * @returns {side-effect} updates the value of playerWins or compWins
   */

  updateWins: function (result) {
    if (result === -1) {
      this.compWins++;
    } else if (result === 1) {
      this.playerWins++;
    }
  },

  /**
   * @returns {side-effect} updates the innerText of IDs player-wins and computer-wins
   */

  updateWinsText: function () {
    document.getElementById("player-wins").innerText = `${this.playerWins}`;
    document.getElementById("computer-wins").innerText = `${this.compWins}`;
  },

  /**
   * @returns {number} updates the innerText of IDs player-wins and computer-wins
   */

  checkWins: function () {
    if (this.compWins >= this.MAX_WINS) {
      document.getElementById("winner").innerText = "The computer wins this time.";
    } else if (this.playerWins >= this.MAX_WINS) {
      document.getElementById("winner").innerText = "The player wins this time.";
    }
  },

  /**
   * @returns {effect} resets player and computer wins to 0
   */

  resetGame: function () {
    this.playerWins = 0;
    this.compWins = 0;
    this.updateWinsText();
    document.getElementById("winner").innerText = "";
  },
};

// button click to run game with chosen button value
document.getElementById("rock").addEventListener("click", function () {
  game.play("rock");
});

document.getElementById("scissors").addEventListener("click", function () {
  game.play("scissors");
});

document.getElementById("paper").addEventListener("click", function () {
  game.play("paper");
});

document.getElementById("reset").addEventListener("click", function () {
  game.resetGame();
});
