var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.querySelector('#wins').innerHTML = wins;
document.querySelector('#losses').innerHTML = losses;
document.querySelector('#guessesLeft').innerHTML = guessesLeft;

//Reset game
function gameReset(){
	//Generate a random letter
	var pickedLetter = letters[Math.floor(Math.random() * letters.length)];
	console.log(pickedLetter + "!!!");
	window.pickedLetter = pickedLetter;

	//Reset guessesLeft
	var guessesLeft = 9;
	window.guessesLeft = guessesLeft;

	//Reset guessedLetters
	guessedLetters.length = 0;
	window.guessedLetters = guessedLetters;
}

gameReset();

//Capture key clicks
document.onkeyup = function(event) {

	//User guesses letter
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess + "?");

	//Tests userGuess
	if (userGuess == pickedLetter) {

		//Wins added
		wins++;
		
		alert("You won!");
		
		gameReset();
	}

	else {

		//Minus one guessesLeft
		guessesLeft--;

		//Push userGuess to guessedLetters
		guessedLetters.push(" " + userGuess); 

		//If all guesses used up
			if (guessesLeft == 0) {
				
				alert("Sorry, you lost.")

				//Loss added
				losses++;

				gameReset();

			}
	}

	//Display stats
	document.querySelector('#wins').innerHTML = wins;
	document.querySelector('#losses').innerHTML = losses;
	document.querySelector('#guessesLeft').innerHTML = guessesLeft;
	document.querySelector('#guessedLetters').innerHTML = guessedLetters;

}
