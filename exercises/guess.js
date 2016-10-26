

var min = 1;
var max = 100;
//create a random number between 1 and 100
var mysteryNumber = Math.floor(Math.random() * (max + 1 - min)) + min;

//prompt the user for input
var stringGuess = prompt("enter a value");
//parse the user's guess as an integer
var guess = parseInt(stringGuess);
var numGuesses = 1;

//TODO: finish the program...
//Outline/hint:
//while the user's guess is not correct...
//  inform them if they need to guess higher or lower
//  prompt them for another input and process it
//when the user has guessed correctly, give them a
//congratulations and tell them how many guesses it took.
