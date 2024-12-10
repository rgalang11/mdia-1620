const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."
*/

/**PLANNING
 * drinking store application
 * 
 * the application can
 * register user by age
 *  allowDrink is set to determine if everyone is allowed to drink or not
 * if allowDrink is false -> prompt: everyone is welcome to drink
 * if allowDrink is true:
 *  age 19 and above -> prompt you are allowed to drink here
 *  age 18 below -> prompt you are not allowed here
 * 
 */

let registry = [];
let settings = {
  //alcohol setting goes here
  allowDrink: false,
  age: 19
};

//rename this to RegisterUser
function registerUser(){
  //ask for the age with readline
  if (settings.allowDrink === true) {

    readline.question(`Please enter your age: `, _age => {

      if (_age >= 19) {
        registry.push(Number(_age));
        console.log(`Welcome! Attendee's age is: ${_age}`);
        StartApp();
      } else {
        console.log(`You are not allowed in here!`);
        StartApp();
      }
  })
  } else {
    console.log(`Everyone is welcome here!`);
    StartApp();
  }
}

//rename this to ToggleAlcohol
function toggleAlcohol(){
  //toggle alcohol setting
  settings.allowDrink = !settings.allowDrink;
  console.log(`The drinking settings is set to: ${settings.allowDrink}`);
  StartApp();
}

//rename this to NotifyAll
function notifyAll(){
  //go through the array to notify everyone
  if (registry.length > 0) {
    for (let i = 0; i < registry.length; i++) {
      console.log(`Attendees age is ${registry[i]}`)
    }
    StartApp();
  } else {
    console.log(`No attendees at the moment.`)
    StartApp();
  }
}


function StartApp(){
  readline.question("What would you like to do?  ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "register"){
      registerUser();
    } else if (_command === "toggle"){
      toggleAlcohol();
    } else if (_command === "notify"){
      notifyAll();
    } else if (_command === "change age"){
      changeAge();
    } else {
      StartApp();
    }
  })
}

StartApp();