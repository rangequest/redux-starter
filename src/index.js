function sayHello() {
  return function () {
    return 'Hello World'
  }
}

console.log(sayHello()())
