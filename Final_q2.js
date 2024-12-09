const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest
*/

/**PLANNING
 * badge system
 * modes are: new, easy, medium, hardest, apocalypse
 * 
 * functions:
 * showStatus -> to display all the modes and points
 * addPoints -> user will select a mode then points will be incremented 1
 * 
 * 
 * challenge 1:
 * makeBadge function is to add all the points. If total points
 * 
 *  <10, prompt "horrible newbie"
  * >=10 and < 20, prompt "adventurer"
  * >=20 and < 30, prompt "slayer"
  * >=30 and < 40, prompt "divine"
  * >40, prompt "eternal"
 */


let badge = {
  //modes go here
  new: 0,
  easy: 0,
  medium: 0,
  hardest: 0,
  apocalypse: 0
};

//rename this to ShowStatus
function showStatus(){
  //loop through the badge and log all the mode and all their corresponding points
  for (let key in badge) {
    console.log("The mode ", key, "has ", badge[key], "points.")
  }
  StartApp();
}

//rename this to AddPoints
function addPoints(){
  //Add the point to the correct mode by capturing the readline
  readline.question(`Please select a mode you prefer: New | Easy | Medium | Hardest | Apocalypse `, _mode => {

    let checkMode = false;
    
    for (let key in badge) {
      if (key === _mode) {
        checkMode = true;
      }
    }
    if (checkMode === true) {
      badge[_mode]++;
      console.log(`Added 1 point to ${_mode}`)
    }
    StartApp();
  })
}

function makeBadge(){
  let total = 0;

  for (let key in badge) {
    let points = badge[key];
    total = total + points;
  }

  console.log(`The total points is: ${total}`)
  if (total < 10) {
    console.log("Horrible Newbie!");
  } else if (total >=10 && total < 20) {
    console.log("Adventurer!");
  } else if (total >=20 && total < 30) {
    console.log("Slayer!");
  } else if (total >=30 && total <= 40) {
    console.log("Divine!");
  } else if (total > 40) {
    console.log("Eternal!");
  }
  StartApp();
}

function StartApp(){
  readline.question("What do you want to do? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "status") {
      showStatus();
    } else if (_command === "add") {
      addPoints();
    }  else if (_command === "total") {
      makeBadge();
    }else{
      StartApp();
    }
  })
}

StartApp();