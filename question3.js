const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

/** PLANNING:
 * Scenario: Lunch money managemement system for students
 * 
 * Enter the student name to input1
 * Enter the students lunch money amount to input2
 * Enter the lunch item name to input 3
 * Enter the lunch item cost to input 4
 * 
 * If lunch money >= lunch item cost, prompt student name purchased lunch item name
 * if lunch money < lunch item cost, prompt student name does not have sufficient fund to buy lunch item name
 * 
 */

//determine a proper function name and parameter variable name
function lunchTime(paramVariable1, paramVariable2,paramVariable3, paramVariable4){
  let studentName = paramVariable1;
  let studentMoney = paramVariable2;
  let lunchName = paramVariable3;
  let lunchCost = paramVariable4;
  //write your code here

  if (studentMoney >= lunchCost) {
    console.log(studentName, " purchased ", lunchName);
  } else if (studentMoney < lunchCost) {
    console.log(studentName, " does not have sufficient fund to buy ", lunchName);
  }
}

function StartApp(){
  readline.question("Enter student's name: ", _input1 => {
    readline.question("Enter student's lunch money amount: ", _input2 => {
      readline.question("Enter lunch item name: ", _input3 => {
        readline.question("Enter lunch item cost: ", _input4 => {

          //call your function here.
          lunchTime(_input1, Number(_input2), _input3, Number(_input4));
          // readline.close();
          if(_input4 !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();