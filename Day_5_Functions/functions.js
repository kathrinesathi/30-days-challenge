// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}
  
  square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
}
  
  addTwoNumbers() // a function has to be called by its name to be executed 

// function with two parameters
  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
  sumTwoNumbers(10, 20) // calling functions

  
  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
  console.log(printFullName('Kathrine', 'Sathi'))


//function with many declaration
  function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173