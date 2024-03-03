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
let playerLevel = level.innerText;

// Audio Tones
const toneBlue = new Audio("../sounds/blue.mp3");
const toneGreen = new Audio("../sounds/green.mp3");
const toneRed = new Audio("../sounds/red.mp3");
const toneYellow = new Audio("../sounds/yellow.mp3");
const wrongTone = new Audio("../sounds/wrong.mp3");
const gameOverTone = new Audio("../sounds/game-over.wav");
const gameWinTone = new Audio("../sounds/game-win.wav");

// Functions
function activatePlayButton(){
    playButton.addEventListener('click', () => {
        playerLevel=0;
        sequence = [];
        play();
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
    makeUnclickable();
    generateSequence();
    computerSequence(playerLevel);
    makeClickable();
}

function generateSequence(){
    for (let i=0; i < 12 ; i++){
        sequence.push(tiles[Math.floor(Math.random() * tiles.length)])
    }

}

function createRestartButton(){
    playButton.innerHTML ="Restart";
}

function computerSequence(level){
    for(let i=0; i<=level; i++){
        animateTile(sequence[i]);
    }
}

function animateTile(tile){
    if (tile == tileBlue){
        tileBlue.classList.remove("inactive");
        toneBlue.play();
    }
    else if (tile == tileGreen){
        tileBlue.classList.remove("inactive");
        toneGreen.play();
    }
    else if (tile == tileRed){
        tileRed.classList.remove("inactive");
        toneRed.play();
    }
    else if (tile == tileYellow){
        tileYellow.classList.remove("inactive");
        toneYellow.play();
    }
}