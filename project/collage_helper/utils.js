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

module.exports = {
  checkExist,
  sleep,
}
