//anonymous function

const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4

// self invoking function
  let squaredNum = (function(n) {
    return n * n
  })(10)
  
  console.log(squaredNum)

  const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
  const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('Kathrine', 'Sathi'))