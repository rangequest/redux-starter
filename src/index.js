import { pipe } from 'lodash/fp'
const input = { tag: 'JAVASCRIPT' }

const getTag = input => input.tag
const toLower = input => input.toLowerCase()
const addParas = input => `(${input})`

const transform = pipe(getTag, toLower, addParas)
const output = transform(input)
console.log('output: ', output)
