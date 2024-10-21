const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the type of movie ticket a person should purchase based on their age.
- If the person is under 5, they should be given a "free" ticket.
- If they are between 5 and 12, they should be given a "child" ticket.
- If they are between 13 and 17, they should be given a "teen" ticket.
- If they are between 18 and 64, they should be given an "adult" ticket.
- If they are 65 or older, they should be given a "senior" ticket.
*/

/** PLANNING:
 * 
 * a variable for age
 * Scenario: We have variety of movie tickets depending on your age. How old are you?
 * <5 FREE
 * >=5 && <=12 Child
 * >=13 && <=17 Teen
 * >=18 && <=64 Adult
 * >=65 Senior
 */

//determine a proper parameter variable name
function DetermineTicketType(age){
  if(age < 5) {
    console.log("Here's your ticket for FREE!");
  } else if(age >= 5 && age <= 12) {
    console.log("Here's your child ticket.");
  } else if(age >= 13 && age <= 17) {
    console.log("Here's your teen ticket.");
  } else if(age >= 18 && age <= 64) {
    console.log("Here's your adult ticket.");
  } else if(age >= 65){
    console.log("Here's your senior ticket.");
  }
}

function StartApp(){
  readline.question('We have variety of movie tickets depending on your age. How old are you? ', age => {

    DetermineTicketType(Number(age));
    
    // readline.close();
    if(age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();