// javascript page to select which page to go to in webjs development githup page

// for experimental login system
function pageSelector () {
	expTask2 = document.getElementById("expTask2");
	numberGuessGame = document.getElementById("numberGuessGame");
	rngRockPaperScissors = document.getElementById("rngRockPaperScissors");
	if (expTask2.clicked) {
        wait(1000);
		change_page1();
	} else if (numberGuessGame.clicked) {
		wait(1000);
		change_page2();
	} else if (numberGuessGame.clicked) {
		wait(1000);
		change_page3();
    }
}

// changes page (code taken from https://stackoverflow.com/questions/24903148/navigate-between-html-files)
function change_page1() {
	// similar behavior as an HTTP redirect
	window.location.replace("/Task 2 TicTacToe game with experimental log in system/index.html");
 };
 function change_page2() {
	// similar behavior as an HTTP redirect
	window.location.replace("/Number-Guess/index.html");
 };
 function change_page3() {
	// similar behavior as an HTTP redirect
	window.location.replace("/Bootstrap-Rock-Paper-Scissors/index.html");
 };

 // allows javascript to wait a set amount of time in ms before executing the next line of code (for debug at the moment)
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 } 