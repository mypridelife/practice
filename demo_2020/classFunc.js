// class User {
//   name = 'John'
//   age = '18'
//   sayName() {
//     console.log(this.name)
//   }
//   sayAge = function () {
//     console.log(this.age)
//   }
// }
// let user = new User()
// console.log(user.name) // John
// console.log(User.prototype.name) // undefined
// console.log(user.sayName) // [Function: sayName]
// console.log(User.prototype.sayName) // [Function: sayName]
// console.log(user.sayAge) //[Function: sayAge]

// console.log(User.prototype.sayAge) // undefined

// let getSingle = function (fn) {
//   let result
//   console.log('arguments', arguments)

//   return (...args) => {
//     return result || (result = fn.apply(this, args))
//   }
// }
// let demo = function (val) {
//   console.log('val', val)
// }

// let single = getSingle(demo, 'hhh')
// single()

function formatZero(num, len) {
  if (String(num).length > len) return num
  return (Array(len).join(0) + num).slice(-len)
}
console.log(formatZero([1, 2], 4))
