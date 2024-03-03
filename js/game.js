let sequence = [];
let playerSequence = [];
let playerTurn;
let compTurn;
let flash;
const playButton = document.getElementById('play');
const blueTone = new Audio("../sounds/blue.mp3");
const greenTone = new Audio("../sounds/green.mp3");
const redTone = new Audio("../sounds/red.mp3");
const yellowTone = new Audio("../sounds/yellow.mp3");
const wrongTone = new Audio("../sounds/wrong.mp3");
const gameOverTone = new Audio("../sounds/game-over.mp3");
const gameWinTone = new Audio("../sounds/game-win.mp3");

startButton.addEventListener('click', (event) => {
    play();
})