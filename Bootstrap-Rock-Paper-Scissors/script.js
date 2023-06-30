//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore;
let computerScore;

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber() // generateRandomNumber will generate a random number
	// 1 = Rock, 2 = Paper, 3 = Scissors
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	
	if (randomNumber == 1) { // Alert "1 is Rock" when random number outputs 1
		alert("1 is Rock")
 }
	
		if (randomNumber == 2) {
			alert("2 is Paper")
 }
	
		if (randomNumber == 3) {
			alert("3 is Scissors")
 }

	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1); // this makes sure that generateRandomNumber will generate a 1, 2 or 3
	return result;
}


function equalityCheck (playerChoice, computerChoice){
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 


	
	alert (playerChoice);  //for debug only
	alert (computerChoice); //for debug only

	const playerTip = 0;
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}
