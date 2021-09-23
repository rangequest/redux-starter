import { compose, pipe } from 'lodash/fp'

// Normal programming
let input = ' Range Quest   '
let output = 'div' + input.trim(input) + '</div>'
console.log('Normal: ', output)

// Function composition in Functional Programming
// Think in functional blocks and compose them together to solve a problem
const trimStr = str => str.trim()
const wrapInDiv = str => `<div>${str}</div>`

output = wrapInDiv(trimStr(input))
console.log('Function Composition: ', output)

// using loDash
const transform = pipe(trimStr, wrapInDiv)
//const transform = compose(wrapInDiv, trimStr)
output = transform(input)
console.log('Using lodash: ', output)
