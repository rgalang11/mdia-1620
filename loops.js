const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

/** FOR LOOP
 * Syntax:
 * 
 * Let Index Loop
 * for (let i = 0; i <1000; i++){
 *  ||repeat until loop ends
 * }
 *
 * 
 * 
*/
// const names =["test1", "test2", "test3", "test4", "test5"];

//sorting in ascending order
//console.log(names.length);
// for (let i = 0; i < names.length; i++) {
//     console.log("Hi", names[i]);
// }


//sorting in descending order
// for (let i = names.length-1; i >= 0 ; i--) {
//     console.log(i);
//     console.log("Hi", names[i]);
// }

const names = ["test1", "test2", "test3", "test4", "test5"];
let settings = {
    allowAdd: true
}

//add name function
function addName(){
    if(settings.allowAdd === true){
        readline.question("What is the name? ", name =>{
            names.push(name);
            StartApp();
        })
    } else {
        console.log("Permission Denied!");
    }
}

//remove name function
function removeName(){
    names.shift();
    StartApp();

    //ask for an index. and use array.splice(index, 1)
}

//read name function
function readName(){
    for(let i=0; i < names.length; i++){
        console.log(`The name is ${names[i]}`)
    }
    StartApp();
}

//login function
function login(){
    readline.question("Which user do you want to login in as? ", _index=>{
        console.log(`You are logged in as ${names[_index]}`)
        StartApp();
    })
}

function test(){

}



function StartApp(){
    readline.question("What is your command? ", _command =>{
        if(_command === "quit"){
            readline.close();
        } else if (_command === "add"){
            addName();
        } else if (_command === "remove"){
            removeName();
        } else if (_command === "read"){
            readName();
        } else if (_command === "login"){
            login();
        } else if (_command === "allow add"){
            //toggle the setting
            settings.allowAdd = !settings.allowAdd;
            console.log(settings.allowAdd);
            StartApp();
            
        }
    })
}
StartApp();