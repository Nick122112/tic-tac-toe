"use strict";
const Player = function (name, selector, id) {
  this.name = name;
  this.selector = selector;
  this.id = id;
};

const player1 = new Player("Player 1", "X", 1);
const player2 = new Player("Player 2", "O", 2);
let player1Score = 0;
let player2Score = 0;
let currentPlayer = player1;

const Gameboard = {
  gameboardArr: ["", "", "", "", "", "", "", "", ""],
  displayBoard() {
    for (let i = 0; i < this.gameboardArr.length; i++) {
      document.querySelector(`.section${i}`).textContent = this.gameboardArr[i];
      document
        .querySelector(`.section${i}`)
        .setAttribute("style", "font-size: 6.4rem; text-align: center;");
    }
  },
  makeClickable() {
    for (let i = 0; i < this.gameboardArr.length; i++) {
      document
        .querySelector(`.section${i}`)
        .addEventListener("click", function () {
          if (Gameboard.gameboardArr[i] !== "" || Game.stillPlaying === false) {
            return;
          }
          Gameboard.gameboardArr[i] = currentPlayer.selector;
          Gameboard.displayBoard();
          Game.checkWin();
          Game.checkTie();
        });
    }
  },
};

const Game = {
  winMessage: `${currentPlayer.name} wins!`,
  isWinner: false,
  stillPlaying: true,
  changeCurrentPlayer() {
    currentPlayer === player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  },
  displayResult(message) {
    const result = document.createElement("p");
    result.textContent = message;
    result.setAttribute(
      "style",
      "font-size: 2.4rem; text-align: center; margin-bottom: 2rem;"
    );
    const contentContainer = document.querySelector(".content-container");
    document.body.insertBefore(result, contentContainer);
  },
  declareWinner() {
    currentPlayer === player1 ? (player1Score += 1) : (player2Score += 1);
    document.querySelector(".player-1-score").textContent = player1Score;
    document.querySelector(".player-2-score").textContent = player2Score;
    this.displayResult(this.winMessage);
    this.isWinner = true;
    this.stillPlaying = false;
  },
  checkWin() {
    let gameboardArr = Gameboard.gameboardArr;
    // Horizontal Wins
    if (
      gameboardArr[0] === currentPlayer.selector &&
      gameboardArr[1] === currentPlayer.selector &&
      gameboardArr[2] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    if (
      gameboardArr[3] === currentPlayer.selector &&
      gameboardArr[4] === currentPlayer.selector &&
      gameboardArr[5] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    if (
      gameboardArr[6] === currentPlayer.selector &&
      gameboardArr[7] === currentPlayer.selector &&
      gameboardArr[8] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    // Vertical Wins
    if (
      gameboardArr[0] === currentPlayer.selector &&
      gameboardArr[3] === currentPlayer.selector &&
      gameboardArr[6] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    if (
      gameboardArr[1] === currentPlayer.selector &&
      gameboardArr[4] === currentPlayer.selector &&
      gameboardArr[7] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    if (
      gameboardArr[2] === currentPlayer.selector &&
      gameboardArr[5] === currentPlayer.selector &&
      gameboardArr[8] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    // Diagonal Wins
    if (
      gameboardArr[0] === currentPlayer.selector &&
      gameboardArr[4] === currentPlayer.selector &&
      gameboardArr[8] === currentPlayer.selector
    ) {
      this.declareWinner();
    }
    if (
      gameboardArr[2] === currentPlayer.selector &&
      gameboardArr[4] === currentPlayer.selector &&
      gameboardArr[6] === currentPlayer.selector
    ) {
      this.declareWinner();
    } else {
      this.changeCurrentPlayer();
    }
  },
  checkTie() {
    let gameboardArr = Gameboard.gameboardArr;
    if (gameboardArr.includes("") === false && this.isWinner === false) {
      this.displayResult(`That's a tie!`);
      this.stillPlaying = false;
    }
  },
};

Gameboard.displayBoard();
Gameboard.makeClickable();
