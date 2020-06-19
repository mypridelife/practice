let obj = {
  a: 111,
}
let obj2 = Object.create(obj)
if ('a' in obj2) {
  console.log(obj2.a)
}
console.log(obj2.hasOwnProperty('a'))
