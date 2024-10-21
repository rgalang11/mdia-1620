const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Create a function that simulates a simple word guessing game. The function will take in a secret word and a user's guess as parameters. It will then compare the user's guess to the secret word.

- If the user's guess matches the secret word exactly, display "Correct! You've guessed the word!"
- If the user's guess does not match, display "Incorrect! Try again."

BONUS DIFFICULTY!!!
- If the user's guess shares the first letter with the secret word, display "You got the first letter right!"
- If the user's guess shares the first and last letter with the secret word, display "Almost Correct!"


BONUS DIFFICULTY2!!!
- If the user's secret word has less than 5 letters or more than 10 letters, the user will be asked to remake the secret word
- This means you need to write a function to intervene before the 2nd readline question to make sure the secret word follows a rule
*/

/**
 * Scenario: Word guessing game
 * if guess = secretword, prompt: correct!
 * if guess != secretword, prompt: incorrect!
 * 
 * bonus:
 * if same first letter, prompt: "you got the first letter!"
 * if same first and last letter, prompt: "almost correct!!"
 */

//determine a proper parameter variable name
function WordGuess(paramSecretWord, paramGuess) {

  // ==============try this code out first before attempting the BONUS DIFFICULTY!!!
 // let testWord = "abcde";
 // console.log("the number of letters---", testWord.length);
  //first letter starts at 0
  //console.log("each letter of testWord---", testWord[0], testWord[1], testWord[2], testWord[3], testWord[4]); 
  //console.log("first and last letter of testword---", testWord[0], testWord[testWord.length-1]);
  // ===============
  let secret = paramSecretWord;
  let guess = paramGuess;

  if (guess === secret) {
    console.log("Correct!!");
  } else {
    if (guess[0] === secret[0]) {
      console.log("You got the first letter!");
      if (secret[secret.length-1] === guess[guess.length-1]) {
        console.log("Almost Correct!!");
      }
    }

  }
}

//determine a proper question to ask and the proper variable name for the answer
function AskSecretWord(){
  readline.question("Enter the secret word: ", (_variableNameSecret) => {

    if (_variableNameSecret.length < 5 || _variableNameSecret.length > 10) {
      console.log("Please enter a secret word with a minimun of 5 letters and maximum of 10 letters!");
      AskSecretWord();
    } 
      function StartGame() {
  
        //determine a proper question to ask and the proper variable name for the user to guess
        readline.question("Guess the secret word: ", (_variableNameGuess) => {
    
          //call your function here
          WordGuess(_variableNameSecret, _variableNameGuess);
    
          if (_variableNameGuess === "quit") {
            readline.close();
          } else if (_variableNameGuess === _variableNameSecret) {
            console.log("Congratulations!");
            readline.close();
          } else {
            StartGame();
          }
        });
      }
    

    
    //make an infinite recall for guessing question
    StartGame();
  });
}
 
AskSecretWord();
  


