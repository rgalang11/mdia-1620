const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
Create a simple library management application with the following features:

1) Allow users to register books by entering the book title. Store this information in an array.
2) Using the libraryCard object, assign "borrow" as one of the key and have it's value default to false. When the user uses the command "borrow", toggle it. A user can only register books if borrow is true.
3) List all the books registered under your array

CHALLENGE 1: The same book cannot be borrowed twice. So if a user tried to borrow a book that's already in the array, deny them

CHALLENGE 2: Make it so that the user can return their books with a "return" command. Returning books means the book registry is an empty array again.
*/

/** PLANNING
 * Application features:
 * Register books in the borrowing system. Will store the book title in bookRegsitry array
 *  in the readline, user will be asked to enter the book title
 *  using the push function, book title will be added to bookRegistry
 *  prompt user, book successfully registered
 * 
 * libraryCard obj
 * default borrow value is set to false
 * User need to toggle borrow to true before allowing to borrow
 * 
 * toggleBorrow
 *  since the default value of the book registered borrow is set to false, once a user use the command "borrow", this will toggle to true then user can now borrow the book.
 * if the borrow is set to false, borrowing permission will be denied
 * 
 * View books in bookRegistry
 * using for loop, user can view the list of books under the bookRegistry array
 * 
 * CHALLENGE 1:
 * if the book is listed under bookRegistry, user will be prompt that the book is not available for borrowing
 * 
 * CHALLENGE 2
 * if the user prompt return command, book title will be removed from the bookRegistry
 * use shift() function to remove from the array
 */

let bookregistry = [];
let libraryCard = {
  //library card setting goes here
  borrow: false
};

//rename this to RegisterBook
function registerBook(){
  //ask for the book title with readline

  if (libraryCard.borrow === true) { //user is allowed to borrow if borrow is set to true
    readline.question(`Please enter the book title: `, _bookTitle => { // user inputs book title
      let bookName 
      for (let i = 0; i < bookregistry.length; i++) {
        if (bookregistry[i].title === _bookTitle) {
          bookName = bookregistry[i];
          console.log("Books is already borrowed. Please select another book.");
          break;
        }

        if (!bookName) {
          bookregistry.push({title: _bookTitle}); // book title is added to the array
          console.log(`${_bookTitle} has been added to registry list!`); //confirmation message
          StartApp();
        }}
      })
  } else {
    console.log("Permission denied!");
  } 
}

//rename this to ToggleBorrow
function toggleBorrow(){
  //toggle borrow setting
  libraryCard.borrow = !libraryCard.borrow;
  console.log(libraryCard.borrow);
}

//rename this to ListBooks
function listBooks(){
  //go through the array to list all the books
  if (bookregistry.length === 0) {
    console.log("No books registered.");
  } else {
    for (let i = 0; i < bookregistry.length; i++ ) {
      console.log(`Book title: ${bookregistry[i].title}`);
    }
  }
}

function returnBook() {
  bookregistry.shift();
  console.log("Book has been returned!");
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else if (_command === "register book") {
      registerBook();
      StartApp();
    } else if (_command === "view books") {
      listBooks();
      StartApp();
    } else if (_command === "borrow") {
      toggleBorrow();
      StartApp();
    } else if (_command === "return") {
      returnBook();
      StartApp();
    } else {
      console.log("Invalid command. Please enter 'register book', 'view books', 'borrow', 'return'.");
      StartApp();
    }
  })
}

StartApp();
