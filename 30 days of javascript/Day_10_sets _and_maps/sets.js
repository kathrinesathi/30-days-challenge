// Set is a collection of elements. Set can only contains unique elements. Lets see how to create a set

// Creating an empty set
const sweet = new Set()
console.log(sweet)
console.log(sweet.size)
//Adding an element to a set
sweet.add('Gulab Jamun')
sweet.add('Rasagula')
sweet.add('laddu')
sweet.add('Mysorpak')
sweet.add('Kesari')

console.log(sweet.size)
console.log(sweet)

const setOfsweet = new Set(sweet)
for (const sweet of setOfsweet) {
    console.log(sweet)
}

//  delete an element from a set using a delete method.

console.log(sweet.delete('Kesari'))
console.log(sweet.size) // 4 elements left in the set

// Checking an element in the set. Help to know if a certain element exists in a set.

console.log(sweet.has('Gulab Jamun')) // false
console.log(sweet.has('Chips')) // true

// Clearing the set.It removes all the elements from a set.

sweet.clear()
console.log(sweet) //{}

//Union of sets:To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C) //Set(6) {1, 2, 3, 4, 5,6}

// Intersection of sets:To find an intersection of two sets can be achieved using filter. Lets find the union of set A and set B (A ∩ B)

let num1 = [1, 2, 3, 4, 5]
let num2 = [3, 4, 5, 6]

let N1 = new Set(a)
let N2 = new Set(b)

let N3 = num1.filter((num) => N2.has(num))
let N = new Set(N3)

console.log(N) //Set(3) {3, 4, 5}

//Difference of sets:To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a)
let B1 = new Set(b)

let c1 = a1.filter((num) => !B1.has(num))
let C1 = new Set(c1)

console.log(C1) //Set(2) {1, 2}