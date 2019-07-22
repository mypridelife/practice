// parseInt/parseFloat MAth ES6的写法
const m1 = Number.parseInt('12.34') // 12
const m2 = Number.parseFloat('123.45#') // 123.45
console.log(m1, '+++', m2)
function f(v) {
  return v > this.age
}
let person = { name: 'John', age: 20 }
let arr = [10, 12, 26, 15]
console.log(arr.find(f, person))

var fs = require('fs')
//       要写入的文件   要写入的内容       a追加|w写入（默认）|r（读取）  回调函数
fs.writeFile('11.txt', '我是要写入的11.txt文件的内容', { flag: 'a' }, function(
  err
) {
  if (err) {
    return console.log(err)
  } else {
    console.log('写入成功')
  }
})
