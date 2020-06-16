var fs = require('fs')
var path = require('path')
var XLSX = require('xlsx')

/**
 * 获得所有文件路径
 * dir: 文件夹名称
 * getFileArr: 获取路径数组
 */
const dirpath = path.join(__dirname, './xlsx')

function getFileArr(directory) {
  let arr = []
  const files = fs.readdirSync(directory)
  for (let i = 0; i < files.length; i++) {
    let filename = files[i]
    arr.push(`${directory}/${filename}`)
  }
  return arr
}
const wenjianArr = getFileArr(dirpath)
console.log('all file', wenjianArr)

/**
 * 读取excle
 */
function readerData(rawFile) {
  let workbook = XLSX.readFileSync(rawFile, { type: 'base64' })

  let firstSheetName = workbook.SheetNames[0]
  let worksheet = workbook.Sheets[firstSheetName]
  let originJsonArr = XLSX.utils.sheet_to_json(worksheet)
  return {
    workbook,
    firstSheetName,
    originJsonArr,
  }
}
/**
 * 读出json，修改json，生成workbook
 */
for (let index = 0; index < wenjianArr.length; index++) {
  const wenjian = wenjianArr[index]
  let { firstSheetName, originJsonArr, workbook } = readerData(wenjian)

  for (let index = 0; index < originJsonArr.length; index++) {
    originJsonArr[index]['答案'] = 'this is answer'
  }
  generateXlsx(originJsonArr, firstSheetName, wenjian, workbook)
}
function generateXlsx(finalJson, sheetName, output, workbook) {
  console.log(finalJson, sheetName, output)

  let wb = XLSX.utils.json_to_sheet(finalJson)

  workbook.Sheets[workbook.SheetNames[0]] = wb

  XLSX.writeFile(workbook, output)
}
