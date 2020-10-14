var fs = require("fs")
/**
 * 获取所有json文件中题目数量
 */
function getAllBookDetails(path) {
  const files = fs.readdirSync(path)

  let total = 0
  for (let index = 0; index < files.length; index++) {
    const fileName = files[index]
    console.log("fileName", fileName)

    const file = require(`${path}/${fileName}`)
    if (file.questions) {
      total += file.questions.length
    } else {
      console.log("---file.length===0---", fileName)
    }
  }
  return total
}
// totalLength = getAllFiles("./bookDetails/英语")
// console.log("totalLength", totalLength)
;(function main() {
  //   const dirArr = fs.readdirSync("./bookDetails")
  //   console.log("dirArr", dirArr)

  //   for (let i = 0; i < dirArr.length; i++) {
  //     let dir = dirArr[i]
  //     const currentFileTotal = getAllBookDetails(`./bookDetails/${dir}`)
  //     console.log("---", dir + currentFileTotal, "---")
  //     totalLength += currentFileTotal
  //   }
  const totalLength = getAllBookDetails(`./bookDetails`)
  console.log("===总共", totalLength, "条数据===")
})()
