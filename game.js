//array of colors
let buttonColors = ["red", "blue", "green", "yellow"];

//game pattern var to keep track of colors selected 
let gamePattern = [];

let userClickedPattern = []

let level = 0

//function to get a random number
function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    
    //how to choose a random color
    let randomChosenColor = buttonColors[randomNumber]

    //add the accuring pattern to the game pattern array to keep track
    gamePattern.push(randomChosenColor)

    //select a random color and animate it to flash 
    let name = $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100)

    //play audio
    playSound(name)

    //adds one level every time nextSequence is called
    level = level + 1

    //change the heading every time nextSequence is called
    $("h1").text("Level " + level)
}

//key down event---------------------------------------------------------------

//make variable to toggle if this is the firest keydown event
let gameStarted = false;

$(document).keydown(() => {
    if(!gameStarted){
        nextSequence();
        gameStarted = true
    }
})




//detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click((event) => {
    let userChosenColor = event.currentTarget.id;
    
    //push user clicked color into the user clicked pattern
    userClickedPattern.push(userChosenColor);

    //play sound when clicked
    playSound(userChosenColor)

    // console.log(userClickedPattern)

    // console.log(event)

    //animate the sqaure when its clicked
    animatePress(userChosenColor)

    nextSequence()

})

//play sound fucntion
function playSound(name){
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

//animate press function
function animatePress(currentColor){
    //select the color current pressed and add the pressed css class to it 
    $(`#${currentColor}`).addClass("pressed")

    //after 100 miliseconds remove the pressed class
    setTimeout(function() {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}
