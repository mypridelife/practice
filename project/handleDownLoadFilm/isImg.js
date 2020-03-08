/**
 * 
 * @param {string} name 文件名
 */
function isImg(name) {
    return name.endsWith(".png") || name.endsWith(".jpg") || name.endsWith(".gif") || name.endsWith(".JPEG") || name.endsWith(".BMP")
}
module.exports = isImg