var fs = require('fs')
var path = require('path')
var XLSX = require('xlsx')
var axios = require('axios')

let total = 0

/**
 * 获得所有文件路径
 * dir: 文件夹名称
 * getFileArr: 获取路径数组
 */
const dirpath = path.join(__dirname, './xlsx/question')

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
    originJsonArr,
  }
}
/**
 * 读出json，修改json，生成workbook
 */
function readWenjian(wenjian) {
  return new Promise((resolve, rejects) => {
    let finalJsonArr = []
    let { originJsonArr, workbook } = readerData(wenjian)
    for (let index2 = 0; index2 < originJsonArr.length; index2++) {
      let question = originJsonArr[index2]['题目']

      //题目重复
      let isAlive2 = finalJsonArr.some((x) => x['题目'] === question)
      if (isAlive2) continue

      setTimeout(
        (function (index2) {
          return async function () {
            try {
              // const result = await axios({
              //   method: 'POST',
              //   url: 'http://cx.icodef.com/wyn-nb',
              //   headers: {
              //     'Content-type': 'application/x-www-form-urlencoded',
              //     Authorization: 'suibianxiede',
              //   },
              //   data: 'question=' + encodeURIComponent(question),
              // })

              const result = await axios({
                method: 'POST',
                url: 'https://app.51xuexiaoyi.com/api/v1/searchQuestion',
                headers: {
                  'Content-type': 'application/json',
                  device: '123123',
                  platform: 'ios',
                  'app-version': 'null',
                  token: 'dcjib8HVHPaAkWoSRivMObVanMGYsA4metQhwdKN5x0hD00WoBjYmAKq2DE0',
                },
                data: { keyword: question },
              })
              if (result.data.code === 200) {
                console.log('question', question)
                originJsonArr[index2]['答案'] = result.data.data[0].a
              }
              //存放到新数组中,序号改变
              let item = {
                题号: finalJsonArr.length + 1,
                课程ID: originJsonArr[index2]['课程ID'],
                题型: originJsonArr[index2]['题型'],
                题目: originJsonArr[index2]['题目'],
                答案: originJsonArr[index2]['答案'],
              }
              finalJsonArr.push(item)
              total += 1
              if (result.data.data) {
                for (let index3 = 0; index3 < result.data.data.length; index3++) {
                  let element = result.data.data[index3]
                  let isAlive = finalJsonArr.some((x) => x['题目'] === element.q)
                  if (isAlive) {
                    console.log('alive', element.q)
                  } else {
                    console.log('not alive', element.q)
                    let ele = {
                      题号: finalJsonArr.length + 1,
                      课程ID: originJsonArr[index2]['课程ID'],
                      题型: originJsonArr[index2]['题型'],
                      题目: element.q,
                      答案: element.a,
                    }
                    finalJsonArr.push(ele)
                    total += 1
                  }
                }
              }
            } catch (error) {
              console.log(error)
            } finally {
              if (index2 >= originJsonArr.length - 1) {
                console.log('++++++++++++++++++++++++++++')
                resolve({ finalJsonArr, wenjian, workbook })
              }
            }
          }
        })(index2),
        2000 * index2
      )
    }
  })
}       123123
//json -> excle
function generateXlsx(finalJson, output, workbook) {
  console.log('--------------------------')
  let wb = XLSX.utils.json_to_sheet(finalJson)
  workbook.Sheets[workbook.SheetNames[0]] = wb
  XLSX.writeFile(workbook, output)
}

//读文件夹
async function readWenjianArr(wenjianArr) {
  for (let index = 0; index < wenjianArr.length; index++) {
    const wenjianItem = wenjianArr[index]
    let { finalJsonArr, wenjian, workbook } = await readWenjian(wenjianItem)
    console.log('===========================')
    let wenjianNew = wenjian.replace('question', 'answer')
    generateXlsx(finalJsonArr, wenjianNew, workbook)
  }
  console.log('-----------====================-------------------', total)
}

function main() {
  readWenjianArr(wenjianArr)
}

// run
main()
