const person = {
  name: 'John',
  profession: 'Engineer',
  address: {
    country: 'US',
    city: 'San Francisco',
  },
}
console.log(person)
person.address.country = 'AU'

const person2 = person
console.log(person2)

const person3 = Object.assign({}, person, { name: 'Bob', age: 30, address: Object.assign({}, person.address, { city: 'LLLL' }) })
console.log(person3)

const person4 = { ...person, address: { ...person.address, country: 'MO' }, name: 'Amy' }
console.log(person4)
