let space = ''
let firstname = 'kathrine'
let lastname = 'sathi'
let country = 'India'
let city = 'Chennai'
let language = 'Tamil'
let job = 'web developer'
let age = 19

//concatenating using addition operator
let name = firstname + lastname
console.log(name)

let infoOne = name + '.I am' + age + '.I live in' + country
console.log(infoOne)

// concatenation: template Literals (template strings)l

let infoTwo = `I am ${name}. I am ${ age } old.`
let infoThree = `I am ${name}. I live in ${city}, ${country}. I am a ${job}. I speak ${language}.`
console.log(infoTwo)
console.log(infoThree)