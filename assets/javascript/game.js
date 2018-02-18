var wordlist = ['elephant', 'lion', 'zebra'];
var gameChoice;
var wrongGuess = [];
var turnsLeft = 5;
var wins = 0;
var counter = 0;
var losses = 0;
var blankSpaces = [];
var guesses = [];

//Word randomizer

function beginTurn() {
  gameChoice = wordlist[Math.floor(Math.random() * wordlist.length)];
  for (var i = 0; i < gameChoice.length; i++) {
    blankSpaces.push('_ ');

  }
  console.log(gameChoice)
  console.log(blankSpaces)

  wrongGuess = []
  turnsLeft = 6;

  updateHtml();
}

function updateHtml() {
  $("#wins").html(wins);
  $("#turnsLeft").html(turnsLeft);
  $("#blankSpaces").html(blankSpaces);
}



function ifWin() {
  if (counter === gameChoice.length) {
    alert("You Win!!");
    wins++

  }
  else if (turnsLeft === 0) {
    alert("Sorry Charlie");

  }

}

document.onkeyup = function (event) {
  var guesses = String.fromCharCode(event.keyCode).toLowerCase();


  if (gameChoice.indexOf(guesses) > -1) {
    for (var i = 0; i < gameChoice.length; i++) {
      if (gameChoice[i] === guesses) {
        blankSpaces[i] = guesses;
        counter++;
      }
    }
  }
  else {
    wrongGuess.push(guesses);
    turnsLeft--;
    console.log(wrongGuess);
    console.log(blankSpaces);
  }

  updateHtml();
  ifWin();
}
console.log("Guesses" + guesses);



//Trying to reset the game?
function ResetGlobalVariables() {
  wordlist = ['elephant', 'lion', 'zebra'];
  gameChoice = undefined;
  wrongGuess = [];
  turnsLeft = 5;
  wins = 0;
  counter = 0;
  losses = 0;
  blankSpaces = [];
  guesses = [];
}
ResetGlobalVariables();

beginTurn();








