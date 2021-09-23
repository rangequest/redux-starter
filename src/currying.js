function add(a) {
  return function (b) {
    return a + b
  }
}

result = add(1)(5)
console.log(result)

//or

const add2 = a => b => a + b
result = add2(1)(5)
console.log(result)
