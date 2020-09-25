// var message
// console.log("message", typeof message === "undefined")
// // msg = "hi"
// // console.log("hi", msg)

// // let b = false
// // console.log("type of ", typeof b === "boolean")

// let obj = null
// console.log("null", obj === null)

// console.log("type of undefined", typeof undefined)

// console.log("null == undefined", null == undefined)

// console.log("070", parseInt("070"))

// // console.log("toString()", undefined.toString())
// console.log("toString()", String(undefined) === "undefined")

/**
 * 传递参数按值传递
 */
// function setName(obj) {
//   obj.name = "hello"
//   obj = new Object()
//   obj.name = "world"
// }
// var person = new Object()
// setName(person)
// console.log("person.name", person.name)

/**
 * 如果是引用传递
 */
// var person = new Object()
// person.name = "hello"
// var person2 = person

// var person3 = new Object()
// person2 = person3
// console.log("person", person.name)
// console.log("person2", person2.name)

// let arr = new Array()
// arr[2] = "hello"
// console.log("arr", arr[0])
// console.log("type", typeof arr)
// console.log("type", arr instanceof Object)
// console.log("methods", arr.toLocaleString())
// console.log("methods", arr.toString())
// console.log("methods", arr.valueOf())

// let sort = arr.sort((v1, v2) => v1 - v2)
// console.log("sort", sort, arr)

// console.log("slice", arr.slice(-10, -9))

// let arr = [1, 2, 3, 4]
// let arr1 = arr.map((item, index, array) => {
//   array.push(item)
//   console.log("item", item)

//   return item + 1
// })

// console.log("arr1", arr, arr.length)
// console.log("arr1", arr1, arr1.length)

/**
 * 函数声明
 */
// console.log("sum(1, 2)", sum(1, 2))

// console.log("sum2(1, 2)", sum2)

// function sum(v1, v2) {
//   return v1 + v2
// }

// var sum2 = function (v1, v2) {
//   return v1 + v2
// }

// let obj = {
//   name: "hello",
// }
// let obj2 = obj
// // obj2 = {
// //   name: "world",
// // }
// // obj.name = "world"
// obj2 = new Object()
// console.log("obj", obj, obj2, obj === obj2)
/**
 * 原型
 */
// function Person() {}
// // Person.prototype.name = "yh g"
// // Person.prototype.sayName = function () {
// //   console.log("name", this.name)
// // }

// Person.prototype = {
//   constructor: Person,
//   name: "yh g",
//   sayName: function () {
//     console.log("name", this.name)
//   },
// }
// var friend = new Person()
// friend.sayName()
// console.log(friend instanceof Person)

/**
 * try-catch
 */
// try {
//   throw new Error("凎")
// } catch (error) {
//   console.log("error", error.message)
// }
// function foo() {
//   try {
//     return 2
//   } catch (error) {
//   } finally {
//     console.log("finally")
//   }
// }
// console.log("foo", foo())
// let body = document.body
// console.log("body", body)
// let s = document.createElement("script")
// s.src = "www.guoyiheng.com"
// body.appendChild(s)
