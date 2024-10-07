const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

BONUS
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

/**PLANNING
 * Game: Guess the correct number of gold bars hidden inside the treasure chest to open it. 
 * Answer: 25
 * 
 * guess: <25 too small
 * guess: >25 too big
 * guess: === 25 set for life!!
 * 
 * 
 * bonus
 * guess 20-30 almost there
 * guess <20 && >30 so close // <20 is to big? - Bruna
 * 
 * 
 */



//determine a proper parameter variable name
function GuessingGame(guess) {
  answer = 25;

  if(guess === answer){
    console.log("You win! You are set for life!!!");
  }
  else if(guess >= 20 && guess < answer){
    console.log("So close! Guess again!");
  }
  else if(guess <= 30 && guess > answer){
    console.log("So close! Guess again!");
  }
  else if(guess <20){
    console.log("Guess higher!");
  }
  else if(guess >30){
    console.log("Guess lower!");
  }
  
}

//determine a proper question to ask and the proper variable name for the answer


  //make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("What is your guess? ", (guess) => {
      
     GuessingGame(Number(guess));

      if (guess === "quit") {
        readline.close();
      } else {
        StartGame();
      }
    });
  }

  StartGame();

