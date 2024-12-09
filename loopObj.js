const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

const settings = {
    darkMode: true,
    mute: false,
    fontSize: "larger"
};

const permission = {
    
    createData: true,
    readData: true,
    updateData: true,
    deleteData: true
};

function showSettingsStatus (){
    for (let key in settings) {
        console.log("Your current settings for " , key, " is ", settings[key]);
    }
}

function showPermissionStatus () {
    for (let key in permission) {
        console.log("Your current permission for " , key, " is ", permission[key]);
    }
}

function startApp() {
    readline.question("What is your command? ", _command=>{
        if (_command === "toggle dark"){
            settings.darkMode = !settings.darkMode;
        } else if (_command === "toggle user add"){
            permission.createData = !permission.createData;
        }  else if (_command === "admin"){
            for (let key in permission) {
                permission[key] = true;
            }
        }  else if (_command === "quit") {
            readline.close();
        } else {
            console.log("Invalid input.");
            startApp();
        }

        console.log("================SETTINGS==================");
        showSettingsStatus();
        console.log("================PERMISSION==================");
        showPermissionStatus();
        startApp();
    })
}


startApp();




/** NOTES
 * arrays []
 * objects {}
 * functions ()
 */