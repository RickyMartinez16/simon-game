//array of colors
let buttonColors = ["red", "blue", "green", "yellow"];

//game pattern var to keep track of colors that are randomly selected for the game
let gamePattern = [];

//array that tracks the pattern that the user has clicked
let userClickedPattern = []

let level = 0

//make variable to toggle if this is the first keydown event
let gameStarted = false;



//NEXT SEQUENCE FUNCTION THAT ADDS A NEW COLOR TO THE GAME PATTERN----------------------------------------------------------------------

function nextSequence(){
    //reset the user clicked pattern
    userClickedPattern = []

    //get a random number
    let randomNumber = Math.floor(Math.random() * 4);
    
    //how to choose a random color
    let randomChosenColor = buttonColors[randomNumber]

    //add the accuring pattern to the game pattern array to keep track
    gamePattern.push(randomChosenColor)

    // console.log("game pattern: " + gamePattern)

    //select a random color and animate it to flash 
    $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100)

    //play audio
    playSound(randomChosenColor)

    //adds one level every time nextSequence is called
    level++

    //change the heading every time nextSequence is called
    $("h1").text("Level " + level)
}

//-------------------------------------------------------------------------------------------------------------------------


//CHECK ANSWER FUNCTION-----------------------------------------------------------------------------------------------

function checkAnswer(currentLevel){
    //if the currentLevel (last color that the user clicked) is the same as the last color in the game pattern it is successful
    if(currentLevel === gamePattern[userClickedPattern.length - 1]){
        // console.log("success")
        //then check if the length of the user clicked pattern is the same length as the game pattern so you know the user is done
        if(userClickedPattern.length === gamePattern.length){
            //run the nextSequence() after a 1 second delay and reset the userClickedPattern to an empty array
            setTimeout(() => {
                nextSequence();
                userClickedPattern = []
            }, 1000)
        }
    } else {
        // console.log("wrong")

        //if the user gets it wrong:

        //play the "wrong" sound
        playSound("wrong");

        //add the "game-over" CSS class to the body
        $("body").addClass("game-over");

        //remove the "game-over" class after 2 milliseconds
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        //change the heading text
        $("h1").text("Game Over! Press Any Key to Restart")
        
        //call the startOver function
        startOver()
    }
}


//KEYDOWN EVENT TO START THE GAME-------------------------------------------------------------------------------------------------


//check the whole doc for a keydown and run nextSequence if its first kedown
$(document).keydown(() => {
    if(!gameStarted){
        nextSequence();
        gameStarted = true
    }
})


//USER CLICK DOWN EVENT-----------------------------------------------------------------------------------------------------------

//detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click((event) => {
    let userChosenColor = event.currentTarget.id;
    
    //push user clicked color into the user clicked pattern
    userClickedPattern.push(userChosenColor);

    //play sound when clicked
    playSound(userChosenColor)

    // console.log("user clicked pattern: " + userClickedPattern)

    // console.log(event)

    //animate the sqaure when its clicked
    animatePress(userChosenColor)


    //call nextSequence function to add another color to the game pattern
    // nextSequence()
    // setTimeout(function() {
    //     nextSequence();
    // }, 1000);


    //call the checkAnswer function to check the answer that the user clicked 
    checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
})




//SOUNDS AND ANIMATION FUNCTIONS ---------------------------------------------------------------------------------------------

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

// START OVER FUNCTION----------------------------------------------------------------------------------
function startOver(){
    //resets the variables
    level = 0;
    gamePattern = [];
    gameStarted = false;
}