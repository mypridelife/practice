// var foo = true
// if (foo) {
//   let bar = foo * 2
// }
// console.log(bar)

// for (var index = 0; index < [100, 99].length; index++) {
//   console.log('==')
// }
// console.log(index)

foo()

var foo

function foo() {
  console.log('1')
}

foo = function bar() {
  console.log('2')
}
// foo()

let object = {
  a: 2,
  b: 3,
}
// for (const key in object) {
//   console.log(key)

//   if (object.hasOwnProperty(key)) {
//     const element = object[key]
//     console.log(element)
//   }
// }

for (var iterator of object) {
  console.log(iterator)
}
