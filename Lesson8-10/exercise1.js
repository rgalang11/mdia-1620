const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
In this exercise we will use objects to remember some settings before we display the results.. There will be 2 settings in this abstract object concept
  - mode (light and dark mode)
  - preferredName (the name we will use when starting the app)
*/

let settings = {
  preferredName: "Vien",
  mode: "dark"
};

function RunSettings(){
  readline.question('What mode (light/dark)?', mode => {
    if (mode === "dark" || mode === "light") {
        settings.mode = mode;
        console.log(mode); // just to check what mode it is by this time
        readline.question('What is your name?', name => {
          settings.preferredName = name;
          RunApp();
        })
    } else {
        RunSettings();
    }    
});
}

function StartApp(){
  if(settings.mode = "light"){
    console.log('\x1b[47m\x1b[30m',`Welcome ${settings.preferredName}`);
  } else if(settings.mode === "dark"){
    console.log('\x1b[40m\x1b[37m',`Welcome ${settings.preferredName}`);
  }

  //console.log(settings.mode);
}

function RunApp(){

  readline.question('What would you like to do? ', step => {
    
    if(step === "settings"){
      RunSettings();
    } else if(step === "start"){
      StartApp();
      RunApp();
    } else if(step === "end"){
      readline.close();
    } else {
      RunApp();
    }
  });
}

RunApp();
