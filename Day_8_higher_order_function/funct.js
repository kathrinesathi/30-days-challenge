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
// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)

//Filter countries containing land
const countriesContainingi = countries.filter((countries) =>
  countries.includes('i')
)
console.log(countriesContainingi)

// every: Check if all the elements are similar in one aspect. It returns boolean

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string')

console.log(arrAllStr)

//find: Return the first element which satisfies the condition
const result = names.find((name) => name.length > 7)
console.log(result)

//findIndex: Return the position of the first element which satisfies the condition
const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

//sort
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']