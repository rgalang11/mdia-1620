const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*

Create a function that simulates a simple math quiz game. The function will take in two numbers and an operator (+, -, *, /) as parameters. 
It will then calculate the correct answer and compare it to the user's guess.

- If the user's guess is correct, display "Correct!"
- If the user's guess is incorrect, display "Incorrect!" and provide the correct answer.

BONUS:
- If the user's guess is within 5 of the correct answer, display "Very Close!"
- If the user's guess is within 2 of the correct answer, display "Almost Correct!"

BONUS 2x DIFFICULTY:
- Set a variable outside the function to limit the number of attempts allowed.
- Track the number of attempts made with a variable starting at 0.
- Each time the function runs, increment the number of attempts made.
- If the number of attempts made reaches the limit, display "No more attempts left!" and end the game.

*/

/**
 * number1 variable
 * number2 variable
 * answer
 * answer = number1 + number2
 * guess === answer say correct, else say wrong!
 */

//determine a proper parameter variable name


function MathGame(num1, num2, operator, guess) {
  let number1 = num1;
  let number2 = num2;
  let symbol = operator
  let uGuess = guess;

  let answer = 0;

  if (operator === "+") {
    answer = number1 + number2;
  } else if (operator === "-") {
    answer = number1 - number2;
  } else if (operator === "*") {
    answer = number1 * number2;
  } else if (operator === "/") {
    answer = number1 / number2;
  }

  if (guess === answer) {
    console.log("Correct"); 
  } else {
    console.log("Incorrect!");
    if (guess < answer + 2 && guess > answer - 2) {
      console.log("Almost correct!");
    } else if (guess < answer + 5 && guess > answer - 5) {
        console.log("Very Close"); 
    }
  }
}

//determine a proper question to ask and the proper variable name for the answer
readline.question("Enter the first number: ", (number1) => {
  readline.question("Enter the second number: ", (number2) => {
    readline.question("Enter operator: ", (operator) => {
      //make an infinite recall for guessing question
      function StartGame() {
    
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("Enter your guess:  ", (guess) => {
          
          MathGame(Number(number1), Number(number2), operator, Number(guess));
    
          if (guess === "quit") {
            readline.close();
          } else {
            StartGame();
          }
        });
      }
    
      StartGame();
    })
  })
});
