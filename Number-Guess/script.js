var randomNumber = 0;   // Variables
var playerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var playerTip = 0;
var countDownFrom = 10;
var currentSecond = 11;
var timerId = 0;

function gameLoop () {
    generateRandomNumber ();
    randomNumber = 5; //debug only
    equalityCheck ();
    updateHtmlContent ();
    //secondCountDown();
}

function generateRandomNumber () {    // Generate random number TEST
    randomNumber = Math.floor((Math.random() * 10) + 1);
    // playerScore = randomNumber;
    // alert (randomNumber) creates an alert of line 19 (playerScore)
}

function equalityCheck () {     // Equality check TEST
    playerGuess = document.getElementById("playerGuessInput").value;
    playerGuess = Number (playerGuess)
    if (playerGuess === randomNumber) {
        currentSecond = 11;
        playerScore = playerScore +1;
        playerTip = "Correct, click to play again";
        document.getElementById("playButton").value = "Play now";
        // clearTimeout (timerId);
    }   else {
        if ( playerGuess < randomNumber ) {
                playerTip = "It's higher than " + playerGuess;
                {
        if ( playerGuess > randomNumber ) {
                playerTip = "It's lower than " + playerGuess;       
                }
        if (isNaN (playerGuess)) {
                playerTip = "Enter a number between 1 & 10";
                }    
    }
    return
}

function secondCountDown(){
        if (currentSecond!=){
                currentSecond = currentSecond - 1;
                document.getElementById("countDown").innerHTML = currentSecond;
        }else{
                endGame();
                return
        }    
        timerId = setTimeout("secondCountDown()",1000);
}

function endGame() {
        computerScore = computerScore + 1;
        generateRandomNumber ();
        currentSecond = 11;
        playerTip = "Too slow, click to play again";
        updateHtmlContent ();
        document.getElementById("playButton").value = "Play now";
        document.getElementById("countDown").innerHTML = 0;
        updateHtmlContent ();
        clearTimeout(timerId);
}


function updateHtmlContent () {     // Updates the HTML page
    document.getElementById("playerScoreContent").innerHTML = playerScore;
    document.getElementById("computerScoreContent").innerHTML = computerScore;
    document.getElementById("tipContent").innerHTML = playerTip;
}