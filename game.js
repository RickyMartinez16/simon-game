//array of colors
let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = [];

//function to get a random number
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber
}

//how to choose a random color
let randomChosenColor = buttonColors[nextSequence()]

//add the pattern accuring pattern to the game pattern to keep track
gamePattern.push(randomChosenColor)

//select a random box and animate it to flash
$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100)





