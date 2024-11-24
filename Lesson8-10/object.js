const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


/**
 * try out objects
 */

// let containers = {};
// containers.orange = "juice"

let containers = {
    orange: "juice"
};

console.log(containers);

//dot notation
console.log(containers.orange);

//bracket notation
console.log(containers["orange"]);


function AskQuestion(){
    readline.question('What is your orange item?', item => {
        console.log(`Your last item is ${containers.orange}!`);
        containers.orange = item;
        console.log(`Your item is ${containers.orange}!`);
        
        if (item === "end") {
            readline.close();
        } else {
            AskQuestion();
        }    
    });
} 

AskQuestion();


/** Notes Nov 18
 * 
 * key and value 
 * 
 * 
 * LOOPS
 * 
 * 
 * 
 */