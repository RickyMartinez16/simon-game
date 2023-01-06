//array of colors
let buttonColors = ["red", "blue", "green", "yellow"];

//game pattern var to keep track of colors selected 
let gamePattern = [];

//function to get a random number
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber
}

//how to choose a random color
let randomChosenColor = buttonColors[nextSequence()]

//add the accuring pattern to the game pattern array to keep track
gamePattern.push(randomChosenColor)

//select a random color and animate it to flash
$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).ready(() => {
    const audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();
})

