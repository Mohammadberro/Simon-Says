//  Queries
const playButton = document.getElementById('play');
const highScore = document.getElementById('high-score');
const level = document.getElementById('level');
const info = document.getElementById('info');
const tiles = document.querySelectorAll(".tile"); // get all tiles
const tileGreen = document.getElementsByClassName("tile green");
const tileYellow = document.getElementsByClassName("tile yellow");
const tileRed = document.getElementsByClassName("tile red");
const tileBlue = document.getElementsByClassName("tile blue");

// Lists and Booleans
let sequence = [];
let playerSequence = [];
let playerTurn=false;
let compTurn=true;
let flash;

// Audio Tones
const blueTone = new Audio("../sounds/blue.mp3");
const greenTone = new Audio("../sounds/green.mp3");
const redTone = new Audio("../sounds/red.mp3");
const yellowTone = new Audio("../sounds/yellow.mp3");
const wrongTone = new Audio("../sounds/wrong.mp3");
const gameOverTone = new Audio("../sounds/game-over.wav");
const gameWinTone = new Audio("../sounds/game-win.wav");

// Functions
function activatePlayButton(){
    playButton.addEventListener('click', () => {
        play();
        sequence = [];
        })
}

activatePlayButton();

function makeUnclickable(){
    tiles.forEach((tile) => {
        tile.classList.add("unclickable");
    });
}

function makeClickable(){
    tiles.forEach((tile) => {
        tile.classList.remove("unclickable");
    });
}

function play(){
    createRestartButton()
    let level = 0;
    makeUnclickable;
    generateSecquence();
    makeClickable();
}

function generateSecquence(){
    for (let i=0; i < 12 ; i++){
        sequence.push(tiles[Math.floor(Math.random() * tiles.length)])
    }
    console.log(sequence);
}

function createRestartButton(){
    playButton.innerHTML ="Restart";
}