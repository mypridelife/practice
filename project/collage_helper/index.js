var fs = require("fs")
var axios = require("axios")
var path = require("path")
var getUserAccount = require("./getUserAccount")
var _ = require("./utils")

let currentUserIndex = 0,
  userId,
  yun,
  isUserEnd = false
const userAccountList = getUserAccount()

/**
 * 通过bookid获取书籍详情数据
 */
async function getBookDetailsByBookId(book) {
  const params = {
    userId: userId,
    yun: yun,
    bookId: book.bookId,
    range: "",
    app_name: "大学答案帮手",
    ts: +new Date(),
  }

  try {
    await _.sleep(2000)
    const result = await axios({
      method: "GET",
      url: `https://back.hatlab.cn/dazs/netClass/getNetQuestionByBookId?param=${encodeURIComponent(
        JSON.stringify(params)
      )}&systemParam={"albumAuthorized":true,"benchmarkLevel":-1,"bluetoothEnabled":false,"brand":"microsoft","cameraAuthorized":true,"fontSizeSetting":15,"language":"zh_CN","locationAuthorized":true,"locationEnabled":true,"microphoneAuthorized":true,"model":"microsoft","notificationAuthorized":true,"notificationSoundEnabled":true,"pixelRatio":1,"platform":"windows","power":100,"safeArea":{"bottom":610,"height":610,"left":0,"right":414,"top":0,"width":414},"screenHeight":736,"screenWidth":414,"statusBarHeight":20,"system":"win10","theme":"light","version":"7.0.9","wifiEnabled":true,"windowHeight":610,"windowWidth":414,"SDKVersion":"2.11.0","devicePixelRatio":1,"scene":1007,"path":"pages/index/main","launchOptions":{"path":"pages/index/main","query":{},"scene":1007,"referrerInfo":{}},"liveId":"p8si08jjor","miniVersion":"2.4.0","appType":""}`,
    })
    if (result.data.status.status_code === 0) {
      const bookInfo = result.data.result.bookInfo
      return bookInfo
    } else {
      console.log("request error", result.data.status.status_reason)
      //切账号
      currentUserIndex += 1
      return {
        error: result.data.status.status_reason,
      }
    }
  } catch (error) {
    console.log("getBookListByKeyword error", error)
  }
}

//先走getBookList.js文件
require("./getBookList")
;(async function main() {
  console.log("+++begin get books+++")
  //获取要跑的book
  const files = fs.readdirSync("./books")
  console.log("files", files)

  for (let i = 0; i < files.length; i++) {
    let originBookName = files[i]
    const currentBookName = originBookName.substring(0, originBookName.length - 5)
    console.log("currentBookName", currentBookName)

    const currentBookList = require(`./books/${currentBookName}`)

    //main函数
    const bookList = currentBookList
    for (let index = 0; index < bookList.length; index++) {
      if (currentUserIndex < userAccountList.length) {
        userId = userAccountList[currentUserIndex].userId
        yun = userAccountList[currentUserIndex].yun
      } else {
        console.log("***账号已用尽***")
        isUserEnd = true
        break
      }
      const item2 = bookList[index]
      let name = item2.name ? item2.name : "未知名称"
      let bookId = item2.bookId ? item2.bookId : "未知名称"
      const currentDir = path.join(__dirname, `./bookDetails/${currentBookName}`)
      if (_.checkExist(`${currentDir}/${name}.json`)) {
        console.log(name, "---已存在，跳过---")
        continue
      }
      if (_.checkExist(`${currentDir}/${bookId}.json`)) {
        console.log(name, "---已存在bookId的命名文件，跳过---")
        continue
      }
      //获取每一个 bookId 的详情
      console.log(`+++开始获取${item2.name}的详情+++`)
      const bookDetails = await getBookDetailsByBookId(item2)
      //将列表写入文件
      if (bookDetails.hasOwnProperty("questions")) {
        try {
          fs.writeFileSync(`${currentDir}/${name}.json`, JSON.stringify(bookDetails))
        } catch (error) {
          fs.writeFileSync(`${currentDir}/${bookId}.json`, JSON.stringify(bookDetails))
        }
      } else {
        // fs.writeFileSync(`${currentDir}/error_${name}.json`, {})
        console.log(`***下标${currentUserIndex - 1}账号已结束***`)
      }
      console.log(`===获取${item2.name}的详情结束===`)
    }
  }
  console.log("===end get books===")
  require("./getTotalQuestions")
})()
