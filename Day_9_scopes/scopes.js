//window scope : Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.

a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible

// Global scope:A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.


let str = 'Java' // is a global scope it will be found anywhere in this file
let num = 15 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(str, num) // Java 15, accessible
  if (true) {
    let str = 'Python'
    let num = 100
    console.log(str, num) // Python 100
  }
  console.log(str, num)
}
letsLearnScope()
console.log(str, num) // Java 15, accessible

// Local scope: A variable declared as local can be accessed only in certain block code.


let string = 'React.js' // is a global scope it will be found anywhere in this file
let number = 2 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let c = 30
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let d = 40
    console.log(a, b, c) // Python 20 30
  }
  // we can not access c because c's scope is only the if block
  console.log(string, number) // JavaScript 10
}
letsLearnScope()
console.log(string, number) // JavaScript 10, accessible

//Now, you have an understanding of scope. A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop etc). Block in JavaScript is a code in between two curly brackets ({}).

// In ES6 and above there is let and const, so you will not suffer from the sneakiness of var. When we use let our variable is block scoped and it will not infect other parts of our code.