// split() 方法用于把一个字符串分割成字符串数组
// toString() 方法 将数组转换为字符串
// join() 方法 把数组中的所有元素转换为一个字符串
let a = [1, 2, 3, 4, 5]
Array.prototype.multiply = function () {
  this.push(...this.map((i) => i * i))
}
a.multiply()
console.log(a)

const uri = 'https://share.mypetcantalk.com/class/?from=singlemessage&isappinstalled=0#/groupdata?groupid=38ffe7d0c13611e8888d233421222e5a&VNK=b77d2cd5&id=bc79f5509a4d11ea9be2bad6cb08b09d'
console.log(uri.split('#'))
console.log(uri.split('#')[0])
console.log(uri.split('#')[1])
console.log(uri.split('#')[0] + '#/groupdata?groupid=' + 'hhh' + '&id=' + 'hhh')
