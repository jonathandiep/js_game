// generates random number to decide what side is chosen
function randSide(amount) {
  var randNums = [];
  for (var i = 0; i < amount; i++) {
    randNums.push(Math.floor(Math.random() * 4));
  }
  return randNums;
}

// flashes a gray color based on which side
function displaySide(side) {
  switch (side) {
    case 0:
      console.log(0);
      $("#top").ready(function() {
        $("#top").css("background", "gray");
        setTimeout(function() {
        $("#top").css("background", "red");
      }, 500);
      });
      break;
    case 1:
      console.log(1);
      $("#left").ready(function() {
        $("#left").css("background", "gray");
        setTimeout(function() {
        $("#left").css("background", "yellow");
      }, 500);
      });
      break;
    case 2:
      console.log(2);
      $("#right").ready(function() {
        $("#right").css("background", "gray");
        setTimeout(function() {
        $("#right").css("background", "green");
      }, 500);
      });
      break;
    case 3:
      console.log(3);
      $("#bottom").ready(function() {
        $("#bottom").css("background", "gray");
        setTimeout(function() {
        $("#bottom").css("background", "blue");
      }, 500);
      });
      break;
    default:
      alert("boo hoo there's a fucking bug :(");
  }
}

// for loop based on difficulty level
var patternCount = 0;
var startTime;
function displayPattern(pattern) {
  setTimeout(function() {
    displaySide(pattern[patternCount]);
    patternCount++;
    if (patternCount < pattern.length) {
      displayPattern(pattern);
    }
  }, 1000);
  startTime = Date.now();
}

// click a button and you will add a value to an array
function buttonClick(side) {
  if (choices.length < randArray.length - 1) {
    choices.push(side);
  }
  else {
    choices.push(side);
    console.log(choices);
    verifyChoice(choices);
  }
}

// compare user's choice and randomly generated choice
var endTime;
function verifyChoice() {
  var choicesTest = choices.toString();
  var randArrayTest = randArray.toString();
  endTime = Date.now();
  var result = (endTime - startTime) / 1000;
  if (choicesTest === randArrayTest) {
    alert("YAY YOU WIN THIS ROUND\nReaction Time: " + result);
  }
  else {
    alert("HAHAHA YOU LOST\nReaction Time: " + result);
    confirm("Select OK to play again (you will start over)");
    level = 0;
  }
  startGame();
  patternCount = 0;
  choices = [];
  console.log(choices);
}

// function that starts the game
function startGame() {
  level += 1;
  console.log(level);
  randArray = randSide(level);
  console.log(randArray);
  displayPattern(randArray);
}
