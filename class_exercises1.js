const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
a person should not be allowed to drink if they are under 19, they should be asked to "leave" if they are under 19.
however the checker is a bit more dynamic, if they are too young (under 13), they should be asked to "leave"
if they are in their teens, then tell them they need to "grow up to 19" before they can drink
if they are between 19 to 50, then "drink away"
if they are over 50, then warn them about their "health"
if they are over 70, then ALSO warn them about their "life"
*/ 

//determine a proper parameter variable name

/*PLANNING

Q: There is an age requirement to enter the bar. How old are you?

< 13  leave
>= 13 and < 19  grow up
>= 19 and <=50 drink away
> 50 and <=70 health
> 70 life!

*/
// You could put the whole sentence in the planning, to guarantee the ux - Bruna








// You have twice =13 - Bruna

function CheckDrinkingAge(age){
  if(age < 13){
    console.log("Leave!!");
  }
  else if(age >= 13 && age < 19) {
    console.log("Drinking age is 19 and up!");
  }
  else if(age >=19 && age <= 50) {
    console.log("Drink Away!");
  }
  else if(age >50 && age <= 70) {
    console.log("Watch out for your health!!");
  }
  else if(age > 70) {
    console.log("Have fun!!");
  }
  
}

//determine a proper question to ask and the proper variable name for user input
readline.question('There is an age requirement to enter the bar. How old are you? ', age => {

  // To enter where? - Bruna

  CheckDrinkingAge(Number(age));
  
  readline.close();
});