/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 补0
var addStrings = function (num1, num2) {
  const padlen = num1.length - num2.length > 0 ? num1.length : num2.length
  const padOfNum1 = num1.padStart(padlen, '0')
  const padOfNum2 = num2.padStart(padlen, '0')

  let flag = 0
  let sum = []

  for (let index = padOfNum1.length - 1; index >= 0; index--) {
    const item1 = Number(padOfNum1[index])
    const item2 = Number(padOfNum2[index])
    const itemCount = flag + item1 + item2
    if (itemCount > 9) {
      flag = 1
    } else {
      flag = 0
    }
    sum.unshift(itemCount % 10)
  }
  if (flag === 1) {
    sum.unshift(1)
  }
  return sum.join('')
}
// @lc code=end
