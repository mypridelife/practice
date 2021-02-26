/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     const prev = nums[i]
  //     for (let j = i + 1; j < nums.length; j++) {
  //       const next = nums[j]
  //       if (prev + next === target) {
  //         return [i, j]
  //       }
  //     }
  //   }
  const prevNums = {} // 存储出现过的数字，和对应的索引

  for (let i = 0; i < nums.length; i++) {
    // 遍历元素
    const curNum = nums[i] // 当前元素
    const targetNum = target - curNum // 满足要求的目标元素
    const targetNumIndex = prevNums[targetNum] // 在prevNums中获取目标元素的索引
    if (targetNumIndex !== undefined) {
      // 如果存在，直接返回 [目标元素的索引,当前索引]
      return [targetNumIndex, i]
    }
    // 如果不存在，说明之前没出现过目标元素
    prevNums[curNum] = i // 存入当前的元素和对应的索引
  }
}
// @lc code=end
