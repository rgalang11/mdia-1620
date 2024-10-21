/*
Syntax function==========================


//The name does not need to be capitalize. Most people do it to differentiate between their variables.
function FunctionName(){
  //write your reusable code blocks here!

  //Use variables and conditions to complete a purpose
}

============================================


Below is a function that lets us ask for an input from the user
---------------------------------------------------------
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Who are you?', name => {
  console.log(`Hey there ${name}!`);
  readline.close();
});
*/