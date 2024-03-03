// Lists and Booleans
let sequence = [];
let playerSequence = [];
let playerTurn=false;
let compTurn=true;
let flash;

//  Queries
const playButton = document.getElementById('play');
const highScore = document.getElementById('high-score');
const level = document.getElementById('level');
const tiles = document.querySelectorAll(".tile"); // get all tiles
const tileGreen = document.getElementsByClassName("tile green");
const tileYellow = document.getElementsByClassName("tile yellow");
const tileRed = document.getElementsByClassName("tile red");
const tileBlue = document.getElementsByClassName("tile blue");

// Audio Tones
const blueTone = new Audio("../sounds/blue.mp3");
const greenTone = new Audio("../sounds/green.mp3");
const redTone = new Audio("../sounds/red.mp3");
const yellowTone = new Audio("../sounds/yellow.mp3");
const wrongTone = new Audio("../sounds/wrong.mp3");
const gameOverTone = new Audio("../sounds/game-over.mp3");
const gameWinTone = new Audio("../sounds/game-win.mp3");

// Functions
startButton.addEventListener('click', (event) => {
    play();
})

function makeActive(){
    tiles.forEach((tile) => {
        tile.classList.remove('inactive');
    });
}

function makeInactive(){
    tiles.forEach((tile) => {
        tile.classList.add('inactive');
    });
}