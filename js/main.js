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
const board = document.getElementsByClassName("board")

// Variables
let computerSequence = [];
// let playerSequence = [];
let playerLevel = 0;

// Audio Tunes
const tuneBlue = new Audio("../sounds/blue.mp3");
const tuneGreen = new Audio("../sounds/green.mp3");
const tuneRed = new Audio("../sounds/red.mp3");
const tuneYellow = new Audio("../sounds/yellow.mp3");
const wrongTone = new Audio("../sounds/wrong.mp3");
const gameOverTone = new Audio("../sounds/game-over.wav");
const gameWinTone = new Audio("../sounds/game-win.wav");

// Functions

function makeUnclickable(){
    board[0].classList.add("unclickable")
    tiles.forEach((element) => {
        element.classList.add("unclickable");
        board[0].style.cursor = 'pointer';
    });
}

makeUnclickable();

function makeClickable(){
    board[0].classList.remove("unclickable")
    tiles.forEach((element) => {
        element.classList.remove("unclickable");
    });
}

function activatePlayButton(){
    playButton.addEventListener('click', () => {
        playerLevel=0;
        playerSequence = [];
        computerSequence = [];
        if (playButton.innerText== "Restart"){
            play();
        }
        else{
        setTimeout(play, 1500);
        }
    })
}

activatePlayButton();

function play(){
    playerLevel = 0;
    createRestartButton();
    generateComputerSequence();
    computerTurn(playerLevel);
}

function generateComputerSequence(){
    for (let i=0; i < 12 ; i++){
        computerSequence.push(tiles[Math.floor(Math.random() * tiles.length)])
    }

}

function createRestartButton(){
    playButton.innerHTML ="Restart";
}

function computerTurn(playerLevel){
    makeUnclickable();
    for(let i=0; i<=playerLevel; i++){
        animateTile(computerSequence[i]);
    }
    makeClickable();
    playerTurn();
}

function animateTile(tile){
    if (tile == tileBlue[0]){
        tileBlue[0].classList.remove("inactive");
        tuneBlue.play();
        setTimeout(makeInactive, 600);
    }
    else if (tile == tileGreen[0]){
        tileGreen[0].classList.remove("inactive");
        tuneGreen.play();
        setTimeout(makeInactive, 600);
    }
    else if (tile == tileRed[0]){
        tileRed[0].classList.remove("inactive");
        tuneRed.play();
        setTimeout(makeInactive, 600);
    }   
    else if (tile == tileYellow[0]){
        tileYellow[0].classList.remove("inactive");
        tuneYellow.play();
        setTimeout(makeInactive, 600);
    }
}

function makeInactive(){
    tiles.forEach((tile) => {
        tile.classList.add("inactive");
    });
}

function playerTurn(){
    let playerSequence = [];
    tiles.forEach((element) => {
        element.addEventListener('click', () =>{
            playerSequence.push(element);
            checkAnswer(element, playerLevel);
            console.log(playerSequence);
        })
    });
}

function checkAnswer(answer, level){
    if (answer == computerSequence){
        if ((playerSequence.length-1) == playerLevel){
            playerLevel++;
            level.innerText = `${playerLevel}`;
            checkWin(playerLevel);
        }
    else{
        play();
    }
    }
}

function checkWin(playerLevel){
    if (playerLevel >= 12){
        info.innerHTML = "You Won!"
    }
    else{
        computerTurn();
    }
}

// function clickHandler(){
//     tiles.forEach((element) => {
//         element.removeEventListener()})
// }