let ms = {
  sex: 1,
  getItem(key) {
    return key in this ? this[key] : null
  },

  setItem(key, value) {
    this[key] = value
  }
}

// function getItem (key) {
//   return key in ms ? ms[key] : null;
// }

// function setItem (key, value) {
//   ms[key] = value;
// }

// function clear() {
// 	ms = {};
// }

// console.log(getItem("name"))

ms.setItem('name', 'gyh')

// console.log(getItem("name"))

// console.log(ms["name"])

// console.log(ms["sex"])

console.log(ms)

let 郭 = 'guo'
console.log(郭)

var iNum = 070
var iNum2 = 0x1f
console.log(iNum)
console.log(iNum2)

var oTemp
console.log(typeof oTemp)
console.log(typeof NaN)
console.log(typeof null)
console.log(null == undefined)

function fun1() {
  console.log(arguments[0])
  console.log(arguments[1])
}

fun1('ggg', 2)

function fun2() {
  let a = 1
  let b = 9
  function add() {
    return a + b
  }
  return add()
}
console.log(fun2())

class People {
  constructor(s, a) {
    this.sex = s
    this.age = a
  }

  getItem(key) {
    return key in this ? this[key] : null
  }

  setItem(key, value) {
    this[key] = value
  }
}
let mmm = new People('man', 18)
console.log(mmm)
People.prototype.name = 'gyh'
console.log(mmm)
console.log('People', People)
console.log(typeof mmm)
