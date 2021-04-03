// split() 方法用于把一个字符串分割成字符串数组
// toString() 方法 将数组转换为字符串
// join() 方法 把数组中的所有元素转换为一个字符串
let a = [1, 2, 3, 4, 5]
Array.prototype.multiply = function () {
  this.push(...this.map((i) => i * i))
}
a.multiply()
console.log(a)
