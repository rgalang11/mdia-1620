const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
Create a simple task management system. This system tracks tasks in different categories: "personal", "work", "urgent", "completed", and "archived". By default, each category starts with 0 tasks. The application should have two main functions:

1) DisplayTasksNumbers: When the user enters the command "tasks", the system should display each category and the number of tasks in it.
2) AddTask: When the user enters the command "add task", the system should prompt the user to specify which category to add a task to. The user will enter one of the categories, and the task count for that category will be incremented by 1.

CHALLENGE 1: Implement a function called TaskSummary. This function should calculate the total number of tasks across all categories. Based on the total number of tasks, assign a status:
- Less than 5 tasks: "light workload"
- Between 5 and 15 tasks: "moderate workload"
- Between 15 and 25 tasks: "heavy workload"
- More than 25 tasks: "overloaded"
*/

/** PLANNING:
 * 
 * categories: personal, work, urgent, completed, archived
 * task management system
 * user will add a task
 * 
 * 
 */

let tasksManagement = {
  //modes go here
};

//rename this to DisplayTasksNumbers
function Function1(){
  //loop through the tasks and log all the categories and all their corresponding numbers
}

//rename this to AddTask
function addTask(){
  //Add the number to the correct category by capturing the readline
  readline.question(`Please enter task category: `, _taskName => {

  })




}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();
