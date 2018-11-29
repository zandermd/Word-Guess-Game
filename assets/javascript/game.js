var wins = 0;
var losses = 0;
var guessRemaining = 10;
var wordList = ["Arizona", "Caliornia", "Washington", "Colorado", "Texas"];
var guessingWord = [];
var blanks = [];
var wrongGuess = [];
var answer = [];

function playGame() {
    answer = wordList[Math.floor(Math.random() * wordList.length)];
    guessingWord = answer.split("");
    for (var i = 0; i < guessingWord.length; i++) {
        console.log(guessingWord[i]);
        blanks.push("_");
        //var underScoreWord = blanks.replace(guessingWord[i], "_");
    }
    //console.log(splitWord);
    //document.getElementById("underscore").innerHTML = guessingWord;
    //console.log(answer);
    console.log(guessingWord);
    console.log(blanks);
    //console.log(underscoreWord);
    var underscoere = document.getElementById("underscore");
    underscoere.innerHTML = blanks;


}

function checkLetter(event) {
    var guessedLetter = event.keyCode;
    console.log(guessedLetter);
}
//console.log(guessedLetter);

playGame()
checkLetter()