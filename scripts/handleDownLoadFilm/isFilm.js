/**
 * 
 * @param {string} name 文件名
 */
function isFilm(name) {
    return name.endsWith(".mp4") || name.endsWith(".wmv") || name.endsWith(".rmvb") || name.endsWith(".avi") || name.endsWith(".rm") || name.endsWith(".mov") || name.endsWith(".flv") || name.endsWith(".mkv")
}
module.exports = isFilm