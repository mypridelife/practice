const fs = require("fs");

const parseTime = require("./parseTime.js.js.js.js")
const isFilm = require("./isFilm.js.js.js.js")
const getFileSize = require("./getFileSize.js.js.js.js")

/**
 * 一些常量
 */
// 下载路径 downLoadPath
const downLoadPath = 'E:\\迅雷下载'
// 最终路径上层文件夹 endPath
const endPath = 'E:\\未有'
//最终路径 newPath
const currentTime = new Date();
const fileDirName = parseTime(currentTime, "{y}_{m}_{d}")
console.log(fileDirName);
const newPath = `${endPath}\\${fileDirName}`
try {
    fs.mkdirSync(newPath);
} catch (error) {
    console.log(error, "file already exists,never mind");
}

/**
 * 1.创建目录
 * 2.读取下载完成的视频文件
 * 3.分辨视频文件，判断大小
 * 4.移动文件到新目录下
 */
//1


let count = 0
function findFilm(path) {
    try {
        let downloadDirArr = fs.readdirSync(path, { withFileTypes: true });
        for (let index = 0; index < downloadDirArr.length; index++) {
            const element = downloadDirArr[index];
            if (element.isDirectory()) {
                const deepPath = path + '\\' + element.name
                findFilm(deepPath)
            } else {
                //找到视频文件且大小大于100MB
                const deepPath = path + '\\' + element.name
                const newName = newPath + '\\' + element.name
                try {
                    const statObj = fs.statSync(deepPath)
                    const fileSize = getFileSize(statObj)
                    if (isFilm(element.name) && fileSize >= 100) {
                        //移动文件
                        console.log(element, "To meet the conditions!!!");
                        count += 1
                        try {
                            fs.renameSync(deepPath, newName)
                        } catch (error) {
                            console.log("rename failed!!!", element, error);
                        }
                    }
                } catch (error) {
                    console.log("statSync failed!!!", error);
                }

            }
        }
    } catch (error) {
        console.log("downLoadPath is not exists!!!", error);
    }

}
findFilm(downLoadPath)
console.log("finish: ", count);