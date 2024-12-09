const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
Create a simple application that manages a list of favorite fruits. The application should allow users to add fruits to their favorites list, but only if the fruit is one of the following: "apple", "banana", "cherry", "date", or "elderberry". Users can also remove a fruit from their favorites list. After any addition or removal, the application should display the current list of favorite fruits. 

CHALLENGE - Implement a feature that allows users to toggle the availability of each fruit using a boolean. If a fruit is marked as false, it cannot be added to the favorites list. After toggling a fruit to false, that fruit is istill in the array but will no longer be displayed or console logged.
*/

let favFruits = [];

//CHALLENGE
let fruitSettings = {
  //the fruits
  apple:true,
  banana:true,
  cherry:true,
  date:true,
  elderberry:true
};

//rename this to AddFruit
function AddFruit(){
  //add a fruit

  readline.question("What fruit would you like to add? ", _fruit=>{
    let checkFruitAllowed = false;
    for(let key in fruitSettings){
      //&& fruitSettings[key] === true is part of the challenge
      if(_fruit === key && fruitSettings[key] === true){
        checkFruitAllowed = true;
      }

      //CHALLENGE
      if(fruitSettings[key] === false){
        //do what remove fruit does but for the key
      }
    }

    //if checkFruitAllowed is true then actually add it
  })
}

//rename this to DisplayFruits
function DisplayFruits(){
  //add a display all fruits

  for(let i=0; i<favFruits.length; i++){
    //console.log fruits
  }
}

//CHALLENGE
//rename this to ToggleFruitSetting
function ToggleFruitSetting(){
  //ask for a fruit to toggle

  readline.question("Which fruit do you want to toggle? ", _fruit=>{
    for(let key in fruitSettings){
      if(_fruit === key){
        //toggle it cause the fruit exists
      }
    }
  })
}

function RemoveFruit(){
  readline.question("Which fruit do you want to remove? ", _fruit=>{

    //make a new array, this array will store all other fruit that is not the one you want to remove
    let newFruitsArray = [];
    for(let i=0;i<favFruits.length; i++){

      if(_fruit != favFruits[i]){
        //add all other fruits except the one you want to remove
        newFruitsArray.push(favFruits[i]);
      }

    }

    //change the list to the array without without the removed fruit
    favFruits = newFruitsArray;
  });
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