const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
Create a simple application that manages a list of favorite fruits. The application should allow users to add fruits to their favorites list, but only if the fruit is one of the following: "apple", "banana", "cherry", "date", or "elderberry". Users can also remove a fruit from their favorites list. After any addition or removal, the application should display the current list of favorite fruits. 

CHALLENGE - Implement a feature that allows users to toggle the availability of each fruit using a boolean. If a fruit is marked as false, it cannot be added to the favorites list. After toggling a fruit to false, that fruit is istill in the array but will no longer be displayed or console logged.
*/

/** PLANNING:
 * commands: add and remove from favorites list
 * 
 * prompts the list of favorite fruits
 * 
 * 
 * 
 * 
 */

let favFruits = [];

//CHALLENGE
let fruitSettings = {
  //the fruits
};

//rename this to AddFruit
function Function1(){
  //add a fruit
  readline.question(`Please enter your favorite fruit: `, _fruit => {
    if (_fruit === "apple" || _fruit === "banana" || _fruit === "cherry" || _fruit === "date" || _fruit === "elderberry" ||) {
      favFruits.push(${_fruit});
      console.log(`${_fruit} has been added to the list!`);
    } else {
      console.log("Invalid input. Please select from the following: apple, banana, cherry, date, elderberry.");
    }
  })
}

//rename this to DisplayFruits
function Function2(){
  //add a display all fruits
}

//CHALLENGE
//rename this to ToggleFruitSetting
function Function3(){
  //ask for a fruit to toggle
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();