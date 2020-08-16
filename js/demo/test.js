// var fs = require("fs")
// let arr = [1, 2, 3]
// console.log("arr", arr)
// let wrongFile = `D://workspace//github//practice//project//crawler_tiku//wrong.txt`
// if (!fs.existsSync(wrongFile)) {
//   fs.writeFileSync(wrongFile, "")
//   console.log("文件夹创建成功")
// } else {
//   console.log("文件已存在")
// }
// fs.writeFileSync(wrongFile, arr)

const startTime = new Date()
setTimeout(() => {
  const endTime = new Date()
  console.log("---time", endTime - startTime)
}, 3000)
