// syntax
const arr = []
console.log(arr)

const number =[0,1,2,3,4,5,10]
const web = ['HTML','CSS','JS','React','PHP','MYSQL']
 
console.log("Numbers:",number)
console.log("There are" +number.length+ "in the array" )

console.log("web Technologies", web)
console.log(web.length) //to know the size of the array

const person = [
    'kat',
    19,
    true,
    { country: 'India', city: 'chennai'},
    {skills:  ['HTML','CSS','JS','React','PHP','MYSQL']}

]
console.log(person)

// accessing index
console.log(web[1])
// console.log(web[lastIndex])
console.log(web.length -1)

//modifying an array
number[0]=10
console.log(number)