const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.
*/

/** PLANNING
 * color modes:
 * red, green, blue, yellow, orange
 * 
 * default value of these is set to TRUE
 * 
 * functions: addColor, displayColor, and toggleColor
 * 
 * addColor
 * if color added is part of the 5 colors, add it to the list
 * if not, prompt "Color added is not in the list, please select from the valid color selection."
 * 
 * displayCOlor: 
 * is to display all the colors listed in the list
 * 
 * toggleColor:
 * is to set the color to true or false
 * once set to false, ask user which color to toggle off
 * 
 * if color is set to false, remove from the userColors list
 */



let userColors = [];
let theme = {
  //the 5 color and their boolean value goes here
  red: true,
  blue: true,
  green: true,
  yellow: true,
  orange: true
};

//rename this to AddUserColor
function addUserColor(){
  //add a color to userColors

  readline.question(`What color would you like to add? `, _color => {
    

    for (let key in theme) {
      if (_color === key) {
        userColors.push(_color);
        console.log(`${_color} added!`);
      }
    } 
    displayUserColors();
    StartApp();
  })
}

//rename this to DisplayUserColors
function displayUserColors(){
  //add a color to userColors
  for (let i = 0; i < userColors.length; i++) {
    console.log(`This color is in the list: ${userColors[i]}`);
  }
  StartApp();
}

//rename this to ToggleThemeColor
function toggleThemeColor(){
  readline.question(`What color would you like to toggle? `, _color => {
    for (let key in theme) {
      if (_color === key) {
        if (_color == "red") {
          theme.red = !theme.red;
        } else if (_color == "blue") {
          theme.blue = !theme.blue;
        } else if (_color == "green") {
          theme.green = !theme.green;
        } else if (_color == "yellow") {
          theme.yellow = !theme.yellow;
        } else if (_color == "orange") {
          theme.orange = !theme.orange;
        }
        console.log(`${_color} is set to ${theme[key]}`)
      }
    } 
    displayUserColors();
    StartApp();
  })
}

function removeColor(){
  readline.question(`Which color would you like to remove? `, _color => {
    let newUserColors = [];

    for (let i = 0; i < userColors.length; i++) {
      
      if (_color != userColors[i]) {
        newUserColors.push(userColors[i]);
      }
    }
    userColors = newUserColors;
  })
}


function StartApp(){
  readline.question("What do you want to do? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "display"){
      displayUserColors();
    } else if (_command === "add"){
      addUserColor();
    } else if (_command === "toggle"){
      toggleThemeColor();
    } else{
      StartApp();
    }
  })
}

StartApp();