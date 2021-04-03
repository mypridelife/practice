/**
 * 位运算场景
 */
/**
 * 按位异或
 */
function swap(a, b) {
  //   var temp = a
  //   var a = b
  //   var b = temp
  //可以用位操作符实现交换不需要中间变量
  a ^= b //a = a ^ b
  b ^= a //b = b ^ a = b ^ a ^ b = a (b = a)
  a ^= b //a = a ^ b = a ^ b ^ a = b;
  return [a, b]
}

let a = 10,
  b = 20

let [c, d] = swap(a, b)
console.log("c=", c, "d=", d)

/**
 * 按位与
 */
//一般都是(i % 2 !== 0)来判断奇数
if (i & 1) {
  //奇数
} else {
  //偶数
}

// -- bad
arr.indexOf(2) === -1
// --good
~arr.indexOf(2)
;[1, 2, 3, 4, 5, NaN].includes(NaN) //true
// -- 订单状态判断，例如：1、2、4、8，表示四种状态，判断当前订单是否为1和2状态
// -- bad
status === FLAG_1 || status === FLAG_2
// --good
;(FLAG_1 | FLAG_2) & status
