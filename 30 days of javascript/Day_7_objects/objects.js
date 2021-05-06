const person = {
    firstName: 'Kathrine',
    lastName: 'Sathi',
    age: 250,
    country: 'India',
    city: 'Chennai',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    // using method
    getFullName: function() {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '01234509776'
  }
  
  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location)
  
  // value can be accessed using square bracket and key name
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['age'])
  console.log(person['location'])
  
  // for instance to access the phone number we only use the square bracket method
  console.log(person['phone number'])