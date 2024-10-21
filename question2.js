const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.

- If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
- If the score is between 72 and 85, display "Great job! [Student Name] has a B."
- If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
- If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
- If the score is below 50, display "Fail. [Student Name] has a F."

CHALLENGE (SAVE FOR LAST):
- If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
  -For example, 48 would give you "Almost there! [Student Name] is close to a D."
- If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
  -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
*/

/** PLANNING
 * Scenario: Midterm exam grading system. Instructor will input the student's name and midterms exam score to the grading system
 * 
 * Enter the student name to input1
 * Enter student's score to input 2
 * 
 * if score is >=86, prompt Excellent student has an A!
 * if score is >=72 and <=85 Good job! Student has a B
 * if score is >=60 and <=71 Good effort! Student has a C
 * if score is >=50 and <=59 Needs improvement! Student has a D
 * if score is <50, prompt FAIL! Student has an F!
 * 
 * if score -2 from the higher rank, prompt almost got the higher rank
 * if score is +2 from the lower rank, prompt almost falling to next lower rank
 */

//determine a proper function name and parameter variable name
function studentGrade(paramVariable1, paramVariable2){
  let sName = paramVariable1;
  let score = paramVariable2;


  if (score >= 86 ) {
    console.log("Excellent! ", sName, " has an A!");
    if (score === 86 || score === 87) {
      console.log("Work harder. ", sName ,"Almost fall to B.");
    }
  } else if (score >= 72 && score <= 85 ) {
    console.log("Great job!! ", sName, " has a B!");
    if (score === 85 || score === 84){
      console.log("Almost there! ", sName,  " is close to A!");
    } else if (score === 72 || score === 73) {
      console.log("Work harder. ", sName ,"Almost fall to C.");
    }
  } else if (score >= 60 && score <= 71 ) {
    console.log("Good effort!! ", sName, " has a C!");
    if (score === 71 || score === 70){
      console.log("Almost there! ", sName,  " is close to B!");
    } else if (score === 60 || score === 61) {
      console.log("Work harder. ", sName ,"Almost fall to D.");
    }
  } else if (score >= 50 && score <= 59 ) {
    console.log("Needs improvement!! ", sName, " has a D!");
    if (score === 59 || score === 58){
      console.log("Almost there! ", sName,  " is close to C!");
    } else if (score === 50 || score === 51) {
      console.log("Work harder. ", sName ,"Almost fall to E.");
    }
  } else if (score < 50) {
    console.log("FAIL!! ", sName, " has a E!");
    if (score === 49 || score === 48){
      console.log("Almost there! ", sName,  " is close to D!");
    }
  }
  //write your code here
}

function StartApp(){
  readline.question("Enter student's name: ", _input1 => {
    readline.question("Enter student's score: ", _input2 => {

      //call your function here.
      studentGrade(_input1, Number(_input2));
      // readline.close();
      if(_input2 === "quit"){
        readline.close();
      } else {
        StartApp();
      }
    });
  });
}

StartApp();