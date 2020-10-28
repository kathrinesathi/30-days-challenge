//set Interval

function sayHello() {
    console.log('Hello')
  }
  setInterval(sayHello, 2000) // it prints hello in every 2 seconds

  //setTimeout
  function sayHello() {
    console.log('Hello')
  }
  setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

  //for each
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(num => console.log(num))

console.log(sum)

const countries = ['Chennai', 'Madurai', 'Thirunelveli', 'Salem', 'Cuddalore']
countries.forEach((element) => console.log(element.toUpperCase()))

//map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)