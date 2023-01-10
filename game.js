//array of colors
let buttonColors = ["red", "blue", "green", "yellow"];

//game pattern var to keep track of colors selected 
let gamePattern = [];

let userClickedPattern = []


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
}



//detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click((event) => {
    let userChosenColor = event.currentTarget.id;
    
    //push user clicked color into the user clicked pattern
    userClickedPattern.push(userChosenColor);

    //play sound when clicked
    playSound(userChosenColor)

    console.log(userClickedPattern)
})

//play sound fucntion
function playSound(name){
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}
