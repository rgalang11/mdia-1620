const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

/**
 * trying array
 */

let shelf = [];


// shelf.push("item1"); //array function for adding
// console.log(shelf[0]);
// console.log(shelf.length);
// console.log(shelf[shelf.length-1]);
// console.log(shelf);

/**
 * .pop > remove item in an array
 * .shift > remove first item in an array
 */

function AskQuestion(){
    readline.question('Leave a question. ', q => {
        shelf.push(q);

        console.log("List of questions ", shelf);
        console.log("The last question is ", shelf[shelf.length-1]);
        
        if (q === "end") {
            readline.close();
        } else {
            AskQuestion();
        }    
    });
} 
AskQuestion();