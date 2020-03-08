/**
 * 
 * @param {string} name 文件名
 */
function isZip(name) {
    return name.endsWith(".rar") || name.endsWith(".zip") || name.endsWith(".7z") || name.endsWith(".ISO")
}
module.exports = isZip