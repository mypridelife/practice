const { type } = require("os")

var message
console.log("message", typeof message === "undefined")
// msg = "hi"
// console.log("hi", msg)

// let b = false
// console.log("type of ", typeof b === "boolean")

let obj = null
console.log("null", obj === null)

console.log("type of undefined", typeof undefined)

console.log("null == undefined", null == undefined)

console.log("070", parseInt("070"))

// console.log("toString()", undefined.toString())
console.log("toString()", String(undefined) === "undefined")

// function setName(obj) {
//   obj.name = "hello"
//   obj = new Object()
//   obj.name = "world"
// }
var person = new Object()
// setName(person)
person.name = "hello"

console.log("person", person.name)

var person2 = person
person2.name = "hello2"
console.log("person", person.name)

console.log("person2", person2.name)
