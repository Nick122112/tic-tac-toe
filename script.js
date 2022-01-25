"use strict";

const Player = (choice) => {
  return { choice };
};

const player1 = Player("X");
const player2 = Player("O");
let currentPlayer = player1;

function changeTurn() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
  }
}

let gameboard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");
const section6 = document.getElementById("section6");
const section7 = document.getElementById("section7");
const section8 = document.getElementById("section8");
const section9 = document.getElementById("section9");

function displayBoard() {
  section1.textContent = gameboard[0][0];
  section2.textContent = gameboard[0][1];
  section3.textContent = gameboard[0][2];
  section4.textContent = gameboard[1][0];
  section5.textContent = gameboard[1][1];
  section6.textContent = gameboard[1][2];
  section7.textContent = gameboard[2][0];
  section8.textContent = gameboard[2][1];
  section9.textContent = gameboard[2][2];
}

function sectionChoice(outerIndex, innerIndex) {
  if (
    gameboard[outerIndex][innerIndex] === "X" ||
    gameboard[outerIndex][innerIndex] === "O"
  ) {
    alert(`That spot is already taken!`);
    return;
  }
  gameboard[outerIndex].splice(innerIndex, 1, currentPlayer.choice);
  console.log(gameboard[0][0]);
  console.log(gameboard[0][1]);
  console.log(gameboard[0][2]);
  displayBoard();
  checkWin();
  checkTie();
  changeTurn();
}

section1.addEventListener("click", function () {
  sectionChoice(0, 0);
});

section2.addEventListener("click", function () {
  sectionChoice(0, 1);
});

section3.addEventListener("click", function () {
  sectionChoice(0, 2);
});

section4.addEventListener("click", function () {
  sectionChoice(1, 0);
});

section5.addEventListener("click", function () {
  sectionChoice(1, 1);
});
section6.addEventListener("click", function () {
  sectionChoice(1, 2);
});

section7.addEventListener("click", function () {
  sectionChoice(2, 0);
});

section8.addEventListener("click", function () {
  sectionChoice(2, 1);
});

section9.addEventListener("click", function () {
  sectionChoice(2, 2);
});

function checkWin() {
  if (
    gameboard[0][0] === "X" &&
    gameboard[0][1] === "X" &&
    gameboard[0][2] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[0][0] === "O" &&
    gameboard[0][1] === "O" &&
    gameboard[0][2] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  } else if (
    gameboard[1][0] === "X" &&
    gameboard[1][1] === "X" &&
    gameboard[1][2] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[1][0] === "O" &&
    gameboard[1][1] === "O" &&
    gameboard[1][2] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  } else if (
    gameboard[2][0] === "X" &&
    gameboard[2][1] === "X" &&
    gameboard[2][2] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[2][0] === "O" &&
    gameboard[2][1] === "O" &&
    gameboard[2][2] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  }
  if (
    gameboard[0][0] === "X" &&
    gameboard[1][0] === "X" &&
    gameboard[2][0] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[0][0] === "O" &&
    gameboard[1][0] === "O" &&
    gameboard[2][0] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  } else if (
    gameboard[0][1] === "X" &&
    gameboard[1][1] === "X" &&
    gameboard[2][1] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[0][1] === "O" &&
    gameboard[1][1] === "O" &&
    gameboard[2][1] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  } else if (
    gameboard[0][2] === "X" &&
    gameboard[1][2] === "X" &&
    gameboard[2][2] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[0][2] === "O" &&
    gameboard[1][2] === "O" &&
    gameboard[2][2] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  }
  if (
    gameboard[0][0] === "X" &&
    gameboard[1][1] === "X" &&
    gameboard[2][2] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[0][0] === "O" &&
    gameboard[1][1] === "O" &&
    gameboard[2][2] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  } else if (
    gameboard[2][0] === "X" &&
    gameboard[1][1] === "X" &&
    gameboard[0][2] === "X"
  ) {
    alert(`Player 1 wins!`);
    endGame();
  } else if (
    gameboard[2][0] === "O" &&
    gameboard[1][1] === "O" &&
    gameboard[0][2] === "O"
  ) {
    alert(`Player 2 wins!`);
    endGame();
  } else {
    return false;
  }
}

function checkTie() {
  if (
    gameboard[0].includes("") === false &&
    gameboard[1].includes("") === false &&
    gameboard[2].includes("") === false &&
    checkWin() === false
  ) {
    alert(`That's a tie!`);
  }
}

// restart button
const restartBtn = document.createElement("button");
restartBtn.setAttribute(
  "style",
  "width: 5rem; height: 3rem; margin-top: 1rem;"
);
restartBtn.textContent = "Restart";
const contentContainer = document.querySelector(".content-container");

// end game function
function endGame() {
  contentContainer.appendChild(restartBtn);
}

restartBtn.addEventListener("click", () => {
  gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  displayBoard();
  contentContainer.removeChild(restartBtn);
});
