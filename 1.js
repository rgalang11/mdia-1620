const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
Create a function that determines the appropriate message for a person based on their age regarding driving privileges.

- If the person is under 16, they should be told "too young to drive".
- If they are between 16 and 17, they should be told "can drive with supervision".
- If they are between 18 and 70, they should be told "can drive freely".
- If they are over 70, they should be advised to "consider a driving assessment".
*/


/** PLANNING
 * Scenario: You must meet a certain age requirement to be granted driving privileges.
 * 
 * < 16 too young
 * >=16 && <=17 can drive with supervision
 * >=18 && <= 70 can drive freely
 * >70 for driving assessment
 * 
 */


//determine a proper parameter variable name
function CheckDrivingAge(drivingAge){

  if(drivingAge < 16) {
    console.log("Too young to drive!!");
  } else if(drivingAge >= 16 && drivingAge <= 17) {
    console.log("You can now drive but with supervision!!");
  } else if(drivingAge >= 18 && drivingAge <= 70) {
    console.log("You can now drive freely!!");
  } else {
    console.log("Please consider driving assessment");
  }
  
}

function StartApp(){
  readline.question('You must meet a certain age requirement to be granted driving privileges. How old are you? ', age => {

    CheckDrivingAge(age);
    //readline.close();

    if(age !== "quit"){
      StartApp();
    } else {
      readline.close();
    }
  });
}

StartApp();