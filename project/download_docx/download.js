var fs = require('fs')
var path = require('path')
var request = require('request')
var XLSX = require('xlsx')

//xlsx
let originFile = 'D://docx//all400.xlsx'

//创建文件夹目录
let dirPath = 'D://docx//files'
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
  console.log('文件夹创建成功')
} else {
  console.log('文件夹已存在')
}

function readerData(rawFile) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader()
  //     reader.onload = (e) => {
  //       const data = e.target.result
  //       console.log(data)

  //       const workbook = XLSX.read(data, { type: 'array' })
  //       const firstSheetName = workbook.SheetNames[0]
  //       const worksheet = workbook.Sheets[firstSheetName]
  //       const header = this.getHeaderRow(worksheet)
  //       const results = XLSX.utils.sheet_to_json(worksheet)
  //       this.generateData({ header, results })
  //       this.loading = false
  //       resolve()
  //     }
  //     reader.readAsArrayBuffer(rawFile)
  //   })
  workbook = XLSX.readFile(rawFile, { type: 'base64' })
  const firstSheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[firstSheetName]
  let json = XLSX.utils.sheet_to_json(worksheet)
  return json
}
let originJson = readerData(originFile)

function downloadXlsx(jsons) {
  for (let index = 0; index < jsons.length; index++) {
    setTimeout(
      (function (index) {
        return function () {
          const json = jsons[index]
          let fileName = json['文本']
          let url = json['链接地址']
          let stream = fs.createWriteStream(path.join(dirPath, fileName))
          request(url)
            .pipe(stream)
            .on('close', function (err) {
              console.log('文件[' + fileName + ']下载完毕')
            })
        }
      })(index),
      2000 * index
    )
  }
}
downloadXlsx(originJson)
