// javascript page to select which page to go to in webjs development githup page

window.onload = pageSelector();

// for experimental login system
function pageSelector () {
	expTask2 = document.getElementById("expTask2");
	numberGuessGame = document.getElementById("numberGuessGame");
	rngRockPaperScissors = document.getElementById("rngRockPaperScissors");
	if (expTask2.clicked) {
        wait(1000);
		change_page1();
        console.log("button1 clicked");
	} else if (numberGuessGame.clicked) {
		wait(1000);
		change_page2();
        console.log("button2 clicked");    
	} else if (numberGuessGame.clicked) {
		wait(1000);
		change_page3();
        console.log("button3 clicked");
    }
}

// changes page (code taken from https://stackoverflow.com/questions/24903148/navigate-between-html-files)
function change_page1() {
    // similar behavior as an HTTP redirect
	window.location.replace("index - task 2.html");
 };
 function change_page2() {
    // similar behavior as an HTTP redirect
	window.location.replace("numIndex.html");
 };
 function change_page3() {
    // similar behavior as an HTTP redirect
	window.location.replace("rpsIndex.html");
 };

 // allows javascript to wait a set amount of time in ms before executing the next line of code (for debug at the moment)
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 } 