var fs = require("fs")
var axios = require("axios")
var path = require("path")
var _ = require("./utils")

/**
 * 抓取热门keyword
 */
function getKeywordList() {
  return "英语，数学，物理，化学，电路，计算机".split("，")
  //   return "有机化学".split("，")
}
/**
 * 通过keyword获取书籍列表bookList
 *
 * @param {number} page 页码
 * @param {string} keyword 关键字
 */
async function getBookListByKeyword(page, keyword) {
  const params = {
    userId: "odryC1ZZiEE8ZWq8_GQv2C41-HWI",
    yun: "LXdwB8J4exUh9glDPne1USW12BCml7f8zWzygqMk6nHg3D",
    cateId: "netclass",
    keyword: keyword,
    schoolId: "",
    range: { page: page, pageSize: 20 },
    app_name: "大学答案帮手",
    ts: +new Date(),
  }
  try {
    await _.sleep(2000)
    const result = await axios({
      method: "GET",
      url: `https://back.hatlab.cn/dazs/km/getBookListByCateId?param=${encodeURIComponent(
        JSON.stringify(params)
      )}&systemParam={"albumAuthorized":true,"benchmarkLevel":-1,"bluetoothEnabled":false,"brand":"microsoft","cameraAuthorized":true,"fontSizeSetting":15,"language":"zh_CN","locationAuthorized":true,"locationEnabled":true,"microphoneAuthorized":true,"model":"microsoft","notificationAuthorized":true,"notificationSoundEnabled":true,"pixelRatio":1,"platform":"windows","power":100,"safeArea":{"bottom":610,"height":610,"left":0,"right":414,"top":0,"width":414},"screenHeight":736,"screenWidth":414,"statusBarHeight":20,"system":"win10","theme":"light","version":"7.0.9","wifiEnabled":true,"windowHeight":610,"windowWidth":414,"SDKVersion":"2.11.0","devicePixelRatio":1,"scene":1007,"path":"pages/index/main","launchOptions":{"path":"pages/index/main","query":{},"scene":1007,"referrerInfo":{}},"liveId":"p8si08jjor","miniVersion":"2.4.0","appType":""}`,
    })
    if (result.data.status.status_code === 0) {
      const originData = result.data.result.bookList
      //   console.log("getBookListByKeyword", originData)
      if (originData.length === 0) {
        return "isEnd"
      } else {
        return originData
      }
    } else {
      console.log("request error", result.data.status.status_reason)
    }
    return []
  } catch (error) {
    console.log("getBookListByKeyword error", error)
  }
}

async function getAllBook(keyWord) {
  let bookList = []
  let isEnd = false,
    i = 0
  while (!isEnd) {
    console.log(`第${i}页`)
    const result = await getBookListByKeyword(i, keyWord)
    if (result === "isEnd") {
      isEnd = true
    } else {
      bookList = bookList.concat(result)
      i += 1
    }
  }
  return bookList
}

;(async function main() {
  const keyWordList = getKeywordList()
  console.log("keyWordList", keyWordList)
  for (let index = 0; index < keyWordList.length; index++) {
    const item = keyWordList[index]
    if (_.checkExist(path.join(__dirname, `./books/${item}.json`))) {
      console.log(`---已存在${item}，跳过---`)
      continue
    }
    //获取每一个keyword的列表
    console.log(`+++开始获取${item}的bookList+++`)
    const bookList = await getAllBook(item)
    //将列表写入文件
    fs.writeFileSync(path.join(__dirname, `./books/${item}.json`), JSON.stringify(bookList))
    //顺便创建一个book的文件夹在details中
    if (!_.checkExist(path.join(__dirname, `./bookDetails/${item}`))) {
      fs.mkdirSync(path.join(__dirname, `./bookDetails/${item}`))
      console.log(item, "文件夹创建成功")
    }
    console.log(`===获取${item}的bookList结束===，共${bookList.length}条数据`)
  }
})()
