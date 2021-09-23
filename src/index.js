const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

const added = [...numbers]
console.log(added)

const added2 = [...numbers, 6, 7]
console.log(added2)

const index = numbers.indexOf(2)
const added3 = [...numbers.slice(0, index), 4, ...numbers.slice(index)]
console.log(added3)

const removed1 = numbers.filter(n => n != 3)
console.log(removed1)

const updated = numbers.map(n => (n == 2 ? 22 : n))
console.log(updated)

// const person = {
//   name: 'John',
//   profession: 'Engineer',
//   address: {
//     country: 'US',
//     city: 'San Francisco',
//   },
// }
// console.log(person)
// person.address.country = 'AU'

// const person2 = person
// console.log(person2)

// const person3 = Object.assign({}, person, { name: 'Bob', age: 30, address: Object.assign({}, person.address, { city: 'LLLL' }) })
// console.log(person3)

// const person4 = { ...person, address: { ...person.address, country: 'MO' }, name: 'Amy' }
// console.log(person4)
