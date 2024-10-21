const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, display "Access Granted!"
- If the user's input does not match, display "Access Denied!"
- If the user's input is "forgot", display "Here is a hint"
- If the user's input is "reset", display "Let's reset your account"

CHALLENGE (SAVE FOR LATER)
- if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
- the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
*/

/** PLANNING
 * Scenario: Simple password checking website
 * 
 * User will set the password to input 1
 * User will enter the password to input 2
 * 
 * if input 2 matches input 1, prompt Access Granted
 * if input 2 did not match input 1, prompt Access Denied
 * If user inputs "forgot", prompt Here is a hint.
 * If user inputs "reset", prompt Let's reset your account
 * 
 */


//determine a proper function name and parameter variable name
function passwordCheck(paramVariable1, paramVariable2){
  let inp1 = paramVariable1;
  let inp2 = paramVariable2;

  if (inp2 === inp1) {
    console.log("Access Granted!");
  } else if (inp2 != inp1) {
    console.log("Access Denied");
  } 

}

//CHALLENGE FUNCTION


function StartApp(){
  readline.question('Set your password: ', _input1 => {
    readline.question("What's your password? ", _input2 => {

      //call your function here.
      passwordCheck(_input1,_input2);
      //readline.close();
      if(_input2 === "quit"){
        //StartApp();
        readline.close();
      } else if (_input2 === _input1) {
        console.log("Password entered is correct!");
        readline.close();
      } else if (_input2 != _input1) {
        if (_input2 === "forgot") {
          console.log("Here's a hint! Password starts with ", _input1[0]);
          readline.close();
        } 
          //readline.close();
          if (_input2 === "reset") {
            console.log("Let's reset your password!");
            StartApp();
          }
      }  
    });
  });
}

StartApp();