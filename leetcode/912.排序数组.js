/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡
var sortArray = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return nums
}
// 快排
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums
  }

  let pivotIndex = Math.floor(nums.length / 2)
  let pivot = nums[pivotIndex]

  let left = []
  let right = []

  for (let i = 0; i < nums.length; i++) {
    if (i === pivotIndex) {
      continue
    }
    if (nums[i] > pivot) {
      right.push(nums[i])
    } else {
      left.push(nums[i])
    }
  }

  return [...sortArray(left), pivot, ...sortArray(right)]
}
// @lc code=end
