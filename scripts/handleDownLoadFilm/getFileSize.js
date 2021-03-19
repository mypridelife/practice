/**
 * @param {string} file 文件路径
 */
function getFileSize(file) {
    return Math.ceil(file.size / 1024 / 1024)
}
module.exports = getFileSize
