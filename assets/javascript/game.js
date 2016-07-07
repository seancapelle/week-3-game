var wins = 0;
var guessesLeft = 10;
var guessedLetters = [];
var dashedArray = [];
var wordBank = ["JEDI", "STORMTROOPER", "LIGHTSABER", "YODA", "TATOOINE", "SKYWALKER", "LIGHTSPEED"];
var wordSplit = wordBank[0];
var wordGuess = wordSplit.split("");
var guessCountRight = 0;

var badArray = [];

//Reset game
function gameReset(){

	//Shows wins
	document.querySelector('#wins').innerHTML = wins;
	
	//Use wordGuess to select index 0 of wordBank
	wordGuess = wordBank[0];
	console.log(wordGuess + " !!!");
	// window.wordGuess = wordGuess;

	//Reset guessesLeft
	var guessesLeft = 10;
	document.querySelector('#guessesLeft').innerHTML = guessesLeft;

	//Reset guessedLetters
	guessedLetters.length = 0;
	document.querySelector('#guessedLetters').innerHTML = guessedLetters;

	//Zeroes out dashedArray
	dashedArray.length = 0;
	dashedLine(wordGuess);

	//Zeroes out guessCountRight
	guessCountRight = 0;
}

//Start game
gameReset();

//Display wordGuess as dashes
function dashedLine(wordGuess) {
	for(var i = 0; i < wordGuess.length; i++) {

		//Push out "_"
		dashedArray.push(" _ ");
		document.querySelector("#game").innerHTML = dashedArray.join(" ");
		}
}

//checkGuess function (LOOP IS ITERATING i TOO MUCH. EVEN CORRECTLY GUESSED LETTERS END UP IN "ELSE" BECAUSE OF i.)
function checkGuess(userGuess){

 for (var i = 0; i < wordGuess.length; i++) {
 	
 		 if (userGuess.indexOf(wordGuess[i], 0) !== -1) {
 		 	
 		 	//Replaces dash with correct letter
 		 	dashedArray.splice(i,1, userGuess);
 			document.querySelector("#game").innerHTML = dashedArray.join(" ");

 			//Adds one to guessCountRight
 			guessCountRight++;

 			//Checks if all letters guessed correctly
 			guessRight(guessCountRight);
 		 	}

 		 else {

 		 	badArray.push(userGuess);
 		 	console.log(badArray + " This is from badArray");

 		 	stringCheck();

 			//(guessWrong() COMMENTED OUT BECAUSE i IS ITERATING TOO MUCH)
 			//guessWrong();
 			}
 		}
  }

  function stringCheck(){
  		if (badArray.length +1 > wordGuess.length){
  			//Minus one guessesLeft
 			guessesLeft--;
 			document.querySelector('#guessesLeft').innerHTML = guessesLeft;

 			if(guessesLeft == 0) {
				alert("Sorry, you lost.");

				gameReset();
			}
  		}
  }

//Checks if all letters in guessWord are guessed
function guessRight(guessCountRight) {
	if(guessCountRight == wordGuess.length){
		alert("You won!")
		
		//Add a win
		wins++;
		document.querySelector('#wins').innerHTML = wins;
		
		//Create a new guessWord
		nextWord();
	}
}

//guessWrong function (DOESN'T WORK BECAUSE i ITERATES TOO MUCH)
function guessWrong() {
	
	//Minus one guessesLeft (ITERATES FOR EACH INSTANCE OF i)
 	guessesLeft--;
 	document.querySelector('#guessesLeft').innerHTML = guessesLeft;

	 }

//Makes a new guessWord
function nextWord(){
	
	//Remove index 0
	wordBank.splice(0,1);
	gameReset();
}

//Capture key clicks
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userGuess + "?");
	checkGuess(userGuess);

	//Place userGuess in guessedLetters array (REGARDLESS IF THEY ARE WRONG OR NOT)
 	guessedLetters.push(" " + userGuess);
 	document.querySelector('#guessedLetters').innerHTML = guessedLetters;

 	//Zero out badArray
 	badArray.length=0;

}



