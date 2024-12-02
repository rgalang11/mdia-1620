const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  /*
We will create an application that lists arrays within an object as looping through objects are useful
We will use for (let key in obj)

This application will allow hosts to give add users to their chat server, assign roles through permissions that are true or untrue

CHALLENGE,
Make a function and command to turn all permissions off and all permissions on

CHALLENGE 2,
Using the role object, make commands to assign different roles by looping through the settings and assing the values of the chosen role
  */



/** PLANNING
 * Create a function to add user:
 *  user will be stored in user array
 *  once added, prompt "user has been added"
 * 
 * Create a function to view users:
 *  use for loop to view all users in the user array
 * 

 * assignPermission function lets the admin set a permission settings for a user
 * 
 * 
 * StartApp function includes command to:
 * add user
 * assign user role
 * view users
 * view roles
 * assign permission
 * show permission
 * switch permission
 * 
 * Create a function to toggle on/off all the permissions
 */

let users = [];
//name: vien;
/*

User Object

{
  name: <string>,
  permissions: {
    
  }
}


*/

//CHALLENGE 2 ONLY
let role = {
  moderator:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:false,
    editChannels:true
  },
  simple:{
    darkMode:true,
    sensitivityAmount:false,
    editAccounts:false,
    deleteAccounts:false,
    createChannels:false,
    editChannels:false
  },
  coAdmin:{
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:false,
    createChannels:true,
    editChannels:true
  }
};


let settings = {
    darkMode:true,
    sensitivityAmount:true,
    editAccounts:true,
    deleteAccounts:true,
    createChannels:true,
    editChannels:true
}

function createUsers(){
      //user readline to prompt for the name of the user to be added
      readline.question(`Please enter the name to be added: `, _user =>{
        users.push({name : _user});
        console.log(`${_user} has been added!`);
        StartApp();
      })
}

//CHALLENGE 2 ONLINE
function assignRole(){
  //function to assign a role to a user

}

function listUsers(){
    //user readline to list out users
    if (users.length === 0) {
      console.log("No user found.");
    } else {
      for (let i = 0; i < users.length; i++){
        console.log(`The name is ${users[i].name}`);
      }  
    }
   
}

function assignPermissions(){
    //user readline to prompt for the admin to give list out added users and give individual permissions for each setting. 
    // This should give roles automatically based on whats assigned to the user based on conditions met.

    readline.question(`Select user to give permission to: `, _user => {
      let user 
      for (let i = 0; i < users.length; i++) {
        if (users[i].name === _user) {
          user = users[i];
          break;
        }
      }  
      if (!user) {
        console.log("Invalid user.");
        StartApp();
      }
      readline.question(`Dark Mode | Set On/Off: `, _darkmode => {
        settings.darkMode = _darkmode === "on"
        readline.question(`Sensitivity Amount |  Set On/Off: `, _sensitivityamount => {
          settings.sensitivityAmount = _sensitivityamount === "on"
          readline.question(`Edit Accounts |  Set On/Off: `, _editaccounts => {
            settings.editAccounts = _editaccounts === "on"
            readline.question(`Delete Accounts | Set On/Off: `, _deleteaccounts => {
              settings.deleteAccounts = _deleteaccounts === "on"
              readline.question(`Create Channels | Set On/Off: `, _createchannels => {
                settings.createChannels = _createchannels === "on"
                readline.question(`Edit Channels |  Set On/Off: `, _editchannels => {
                  settings.editChannels = _editchannels === "on"
                  console.log("Settings saved!");
                  StartApp();
                })
              })
            })
          })
        })
      })    
    })
}

function showPermissions(){
    //loop through all the users settings and roles based on their permissions

}

function switchPermission() {
  readline.question("Toggle permissions | On/Off: ", _permission => {
    if (_permission === "on") {
      for (let key in settings) {
        settings[key] = true;
      }
      console.log("Permissions set to ON");
     // console.log(settings.createChannels);
      StartApp();

    } else if (_permission === "off") {
      for (let key in settings) {
        settings[key] = false;
      } 
      console.log("Permissions set to OFF");
      //console.log(settings.createChannels);
      StartApp();
    }
  })
}

function StartApp() {
    readline.question("What would you like to do? ", (_command) => {
      
      //add other commands here to add
  
    
      if (_command !== "quit") {
        if (_command === "add user") {
          createUsers();
        } else if (_command === "view users") {
          listUsers();
        } else if (_command === "assign permission") {
          assignPermissions();
        } else if (_command === "show") {
          showPermissions();
        } else if (_command === "switch") {
          switchPermission();
        } else if (_command === "assign role") {
          assignRole();
        }
        StartApp();
      } else {
        readline.close();
      }
    });
  }
  
  StartApp();
  


  // code looks clean and current code are working --Bruna



  