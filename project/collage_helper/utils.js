var fs = require("fs")

/**
 * 检查文件是否存在
 */
function checkExist(path) {
  return fs.existsSync(path)
}
/**
 * sleep
 */
function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
/**
 * 获取所有json文件中题目数量
 */
//TODO 获取所有json文件中题目数量

module.exports = {
  checkExist,
  sleep,
}
