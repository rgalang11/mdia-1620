const { run } = require('node:test');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

/*
In this exercise we will use arrays to add messages, review messages, and remove messages
*/

let messages = [];

function AddMessage(){
  readline.question("Write your message. ", msg =>{
    messages.push(msg);
    RunApp();
  })

}

function ReviewMessage(){
  if(messages.length === 0){
    console.log("No message to view!");
    RunApp();
  } else{
    readline.question("Which message would you like to view? ", ind =>{
      if(Number(ind) < messages.length-1){
        console.log("Reviewing...", messages[ind]);
        RunApp();
      } else {
        console.log("index too big. try again!");
        RunApp();
      }
    })
  }

}

function RemoveFirstMessage(){
  messages.shift();
  RunApp();
}

function RemoveLastMessage(){
  messages.pop();
  RunApp();
}

function RunApp(){
  console.log("List of messages ", messages)
  readline.question('What would you like to do? ', step => {
    
    if(step === "add"){
      AddMessage();
    } else if(step === "review"){
      ReviewMessage();
    } else if(step === "remove first"){
      RemoveFirstMessage();
    } else if(step === "remove last"){
      RemoveLastMessage();
    } else if(step === "end"){
      readline.close();
    } else {
      RunApp();
    }
  });
}

RunApp();
