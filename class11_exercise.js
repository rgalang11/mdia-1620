const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

/** PLANNING
 * 
 * add function = to add users in the registry
 * check registry = to view users registered
 * ban users = add users in the banned list
 * check banned = to view users banned
 * 
 * CHALLENGE:
 * if user added = user in banned list, prompt "User can't be added. Person is banned."
 * if not, run addfunction
 * if addRegistry =  true; run add function
 * if addRegistry = false, prompt permission denied
 */

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {

  //If AddRegistry = true, run add function
  if (settings.addRegistry === true) {
    readline.question("Please enter name to be registered: ", _name=>{
      users.push(_name);
          StartApp();
      }) 
  } else {
    console.log("Permission Denied!");
    StartApp();
  }
}

function CheckRegistry() {
  //loop through all the users and log them
  if (settings.checkRegistry === true) {
    for(let i=0; i < users.length; i++){
      console.log(`The name is ${users[i]}`)
    }
    StartApp();
  } else {
    console.log("Permission Denied!");
    StartApp();
  }

}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  if (settings.banPerson === true) {
    readline.question("Please enter name to be banned: ", _name=>{
      banned.push(_name);
      StartApp();
    })
  } else {
    console.log("Permission Denied!");
    StartApp();
  }
}

function CheckBanned(){
  //loop through all the banned users and log them
  if (settings.checkBans === true) {
    for(let i=0; i < banned.length; i++){
      console.log(`The name is ${banned[i]}`)
    }
    StartApp();
  } else {console.log("Permission Denied!");
    StartApp();
  }
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    
    //add other commands here to add

  
    if (_command !== "quit") {
      if (_command === "add"){
        AddUserToRegistry();
      } else if (_command === "check registry"){
        CheckRegistry();
      } else if (_command === "ban"){
        BanUser();
      } else if (_command === "check banned"){
        CheckBanned();
      } else if (_command === "allow add"){
        settings.addRegistry = !settings.addRegistry;
        console.log(settings.addRegistry);
        StartApp();
      } else if (_command === "allow check registry"){
        settings.checkRegistry = !settings.checkRegistry;
        console.log(settings.checkRegistry);
        StartApp();
      } else if (_command === "allow ban"){
        settings.banPerson = !settings.banPerson;
        console.log(settings.banPerson);
        StartApp();
      } else if (_command === "allow check banned"){
        settings.checkBans = !settings.checkBans;
        console.log(settings.checkBans);
        StartApp();
      }
    } else {
      readline.close();
    }
  });
}

StartApp();
