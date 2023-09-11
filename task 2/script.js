// Generate a random number between 1 and 100 (inclusive)

var minNumber = 1;
var maxNumber = 100;
var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

// Function to check the user's guess and provide feedback

function checkGuess(guess) {
  if (guess < randomNumber) {
    return "Your guess is too low. Try again";
  } 
  
  else if (guess > randomNumber) {
    return "Your guess is too high. Try again";
  }

  else{
    return "Congratulations! Your guess is correct";
  }
}

// Main game loop

while (true) {
  var userGuess = prompt("Guess the number between " + minNumber + " and " + maxNumber + ":");
  var parsedGuess = parseInt(userGuess);

  if (isNaN(parsedGuess)) {
    alert("Please enter a valid number.");
  } else {
    var result = checkGuess(parsedGuess);
    alert(result);

    if (parsedGuess === randomNumber) {
      break; // Exit the loop if the guess is correct
    }
  }
}

  