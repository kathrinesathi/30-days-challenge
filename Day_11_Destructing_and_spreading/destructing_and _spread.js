// Destructing array
const numbers =[1,2,3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const fullstack=[
  ['html', 'css', 'js', 'React'],
  ['node','express','mongodb']
]
const [frontEnd, backEnd] = fullstack
console.log(frontEnd)
console.log(backEnd)

const names = ['Yogi', 'Bala', 'Hari', 'Sri']
  let [, secondPerson, , fourthPerson] = name // first and third person is omitted

  console.log(secondPerson, fourthPerson)