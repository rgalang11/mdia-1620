const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
/*  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });*/

  function Salad(cheeseLevel){
    /**planning and design 
     * i want to make a salad and change it's cheesyness
     * im going to make 2 variables first for its ingredients then cheese level
     * ill make sure it captures how strong it is and compare
    */

    let ing1 = "lettuce";
    let ing2 = "tomatoes";

    if(cheeseLevel === 0){
        console.log(`you made a salad with ${ing1} and ${ing2}`);
    } 
    else if(cheeseLevel > 0 && cheeseLevel < 3){
        console.log(`you made ${ing1} and ${ing2} cheese salad`);
    }

    else if(cheeseLevel > 3){
        console.log(`you made ${ing1} and ${ing2}  extremely cheese salad`);
    }
  }

//Salad(5);

function startApp(){
    readline.question('What is your preferred cheese? ', lvl =>{
        Salad(Number(lvl));



    if(lvl !== "exit"){
        startApp();
    }
    else{
        readline.close();
    }
    
});
}
startApp();