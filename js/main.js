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
const board = document.getElementsByClassName("board");


// Variables
let turnCount = 0;
let sequence = [];
let playerSequence = [];
let playerLevel = 0;
let highestScore = 0;
let clickCounter = -1;

// Audio Tunes
const tuneBlue = new Audio("../sounds/blue.mp3");
const tuneGreen = new Audio("../sounds/green.mp3");
const tuneRed = new Audio("../sounds/red.mp3");
const tuneYellow = new Audio("../sounds/yellow.mp3");
const wrongTone = new Audio("../sounds/wrong.mp3");
const gameOverTone = new Audio("../sounds/game-over.wav");
const gameWinTone = new Audio("../sounds/game-win.wav");

// Functions
function activatePlayButton(){
        playButton.addEventListener('click', () => {
            if (playButton.innerText== "Restart"){
                play();
            }
            else{
            setTimeout(play, 1500);
            }
    })
}

activatePlayButton();

function makeUnclickable(){
    board[0].classList.add("unclickable");

}

makeUnclickable();

function makeClickable(){
    board[0].classList.remove("unclickable");
    board[0].style.cursor = 'pointer';
}

function play(){
    createRestartButton();
    generateSequence();
    computerTurn(turnCount);
    playerTurn(turnCount);
}

function generateSequence(){
    for (let i=0; i < 12 ; i++){
        sequence.push(tiles[Math.floor(Math.random() * tiles.length)])
    }

}

function createRestartButton(){
    playButton.innerHTML ="Restart";
}

function computerTurn(turnCount){
    for(let i=0; i<=turnCount; i++){
        setTimeout(function(){
        flashTile(sequence[i]);
        },1000*i)
    }
}

function flashTile(tile){
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

function playerTurn(turnCount){
    clickCounter = -1;
    makeClickable();
    tiles.forEach((element) =>{
        element.addEventListener('click', (e) =>{
        if (clickCounter < turnCount){
            clickCounter++;
            choice = (e.target);
            checkSequence(choice);
        }
        })
    })
}

function checkSequence(choice){
    if (choice == sequence[clickCounter] && clickCounter == turnCount){
        info.innerHTML = "You got it Right!"
    }
    else{
        wrongTone.play();
        info.innerHTML = "You Lost!"
        setTimeout(function(){
            gameOverTone.play();
            },1000)
    }
}

function eventListenerRemover(){
    tiles.forEach((element) =>{
        element.removeEventListener('click'), (e) =>{
            playerSequence.push((e.target))
        }
    })

}
