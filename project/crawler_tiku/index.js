const Crawler = require("crawler")
var fs = require("fs")
var XLSX = require("xlsx")
const { resolve } = require("path")

function readerData(rawFile) {
  let workbook = XLSX.readFileSync(rawFile, { type: "base64" })

  let firstSheetName = workbook.SheetNames[0]
  let worksheet = workbook.Sheets[firstSheetName]
  let originJsonArr = XLSX.utils.sheet_to_json(worksheet)
  return {
    workbook,
    originJsonArr,
  }
}

function crawler(crawlerBaseUrl, start, total) {
  return new Promise((resolve, reject) => {
    const c = new Crawler({
      maxConnections: 100,
      rateLimit: 2000,
    })

    // 最终的数据
    let final = {
      finalJson: [],
      wrong: [],
    }

    function getTask(startPage, totalPage) {
      // 最终的任务队列
      const tasks = []

      for (let index = startPage; index > startPage - totalPage; index--) {
        const task = {
          uri: `${crawlerBaseUrl}/?id=${index}`,
          callback: taskCallback,
        }
        tasks.push(task)
      }

      c.queue(tasks)

      c.on("drain", function () {
        resolve(final)
      })
    }
    getTask(start, total)

    function taskCallback(error, res, done) {
      if (error) {
        console.log("爬虫连接问题", error)
        reject(error)
      } else {
        const $ = res.$

        // 一共多少个
        const questionNodeArr = $(
          "body > div > div.content-wrap > div > div > div.news > article >p:contains('问题：')"
        )
        const answerNodeArr = $(
          "body > div > div.content-wrap > div > div > div.news > article >p:contains('答案:')"
        )
        console.log("questionNodeArr", questionNodeArr.length)
        console.log("answerNodeArr", answerNodeArr.length)
        if (questionNodeArr.length !== answerNodeArr.length) {
          console.log("长度不一致，不合格", res.options.uri)
          final.wrong.push(res.options.uri)
        } else {
          console.log("ok", res.options.uri)
        }

        const questionArr = getTopicByArr(questionNodeArr)
        const answerArr = getTopicByArr(answerNodeArr)
        const topicArr = getFinalJson(questionArr, answerArr)
        final.finalJson = [...final.finalJson, ...topicArr]
        done()
      }
    }
  })
}
function getFinalJson(array1, array2) {
  let final = []
  if (array1.length !== array2.length) {
    return []
  }
  for (let index = 0; index < array1.length; index++) {
    const question = array1[index]
    const answer = array2[index]
    const topic = {
      question: question.replace("问题：", ""),
      answer: answer.replace("答案:", ""),
    }
    final.push(topic)
  }
  return final
}
function getTopicByArr(array) {
  let arr = []
  for (let index = 0; index < array.length; index++) {
    const ele = array[index]
    arr.push(getText(ele.children))
  }
  return arr
}
function getText(array) {
  try {
    let str = ""
    for (let index = 0; index < array.length; index++) {
      const element = array[index]
      if (element.type === "tag") {
        let res = getText(element.children)
        str += res
      } else if (element.type === "text") {
        str += element.data
      }
    }
    return str
  } catch (error) {
    console.log("error", error)
  }
}

//json -> excle
function generateXlsx(json, output, workbook) {
  console.log("--------------------------")
  let wb = XLSX.utils.json_to_sheet(json)
  workbook.Sheets[workbook.SheetNames[0]] = wb
  XLSX.writeFile(workbook, output)
}

function main(start, total) {
  return new Promise(async (resolve, reject) => {
    const startTime = new Date()
    let xlsxPath = `D://workspace//github//practice//project//crawler_tiku//${start}_${
      start - total + 1
    }.xlsx`
    let wrongFile = `D://workspace//github//practice//project//crawler_tiku//${start}_${
      start - total + 1
    }_wrong.txt`
    if (!fs.existsSync(xlsxPath)) {
      fs.writeFileSync(xlsxPath, "")
      console.log("文件夹创建成功")
    } else {
      console.log("文件已存在")
    }
    if (!fs.existsSync(wrongFile)) {
      fs.writeFileSync(wrongFile, "")
      console.log("文件夹创建成功")
    } else {
      console.log("文件已存在")
    }
    let { workbook } = readerData(xlsxPath)
    const final = await crawler("http://www.naxuefen.com", start, total)
    console.log("wrong", final.wrong)
    fs.writeFileSync(wrongFile, final.wrong)
    const endTime = new Date()
    console.log("finish", start - total, "---once time---", endTime - startTime)
    generateXlsx(final.finalJson, xlsxPath, workbook)
    resolve()
  })
}

let start = 388906
const total = 100
async function run() {
  const startTime = new Date()
  for (let index = start; index > 387906; index -= total) {
    await main(index, total)
  }
  const endTime = new Date()
  console.log("---total time---", endTime - startTime)
}
run()
