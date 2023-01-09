//array of colors
let buttonColors = ["red", "blue", "green", "yellow"];

//game pattern var to keep track of colors selected 
let gamePattern = [];

let userClickedPattern = []

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
$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100)

//play audio
let audio = new Audio(`sounds/${randomChosenColor}.mp3`);
audio.play();

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.

$(".btn").click((event) => {
    let userChosenColor = event.currentTarget.id;
    
    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern)
})