var fs = require("fs")
var axios = require("axios")
var path = require("path")

function sleep(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
/**
 * 抓取热门keyword
 */
function getKeywordList() {
  return "英语，数学，物理，化学，电路".split("，")
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
    userId: "odryC1aXSAAJP10lmpl56ucJEc-k",
    yun: "hTxBUq0HADXaTZCJA5rjQ4cQHprfqeM6KwMdLlpoZ543D",
    cateId: "netclass",
    keyword: keyword,
    schoolId: "",
    range: { page: page, pageSize: 20 },
    app_name: "大学答案帮手",
    ts: +new Date(),
  }
  try {
    await sleep(2000)
    const result = await axios({
      method: "GET",
      url: `https://back.hatlab.cn/dazs/km/getBookListByCateId?param=${encodeURIComponent(
        JSON.stringify(params)
      )}`,
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
/**
 * 通过bookid获取书籍详情数据
 */
async function getBookDetailsByBookId(book) {
  const params = {
    userId: "odryC1aXSAAJP10lmpl56ucJEc-k",
    yun: "hTxBUq0HADXaTZCJA5rjQ4cQHprfqeM6KwMdLlpoZ543D",
    bookId: book.bookId,
    range: "",
    app_name: "大学答案帮手",
    ts: +new Date(),
  }

  try {
    await sleep(2000)
    const result = await axios({
      method: "GET",
      url: `https://back.hatlab.cn/dazs/netClass/getNetQuestionByBookId?param=${encodeURIComponent(
        JSON.stringify(params)
      )}`,
    })
    if (result.data.status.status_code === 0) {
      const bookInfo = result.data.result.bookInfo
      return bookInfo
    } else {
      console.log("request error", result.data.status.status_reason)
    }
    return {}
  } catch (error) {
    console.log("getBookListByKeyword error", error)
  }
}

;(async function main() {
  const keyWordList = getKeywordList()
  console.log("keyWordList", keyWordList)
  keyWordList.forEach(async function (item) {
    //获取每一个keyword的列表
    console.log(`===开始获取${item}的bookList===`)
    const bookList = await getAllBook(item)
    //将列表写入文件
    fs.writeFileSync(path.join(__dirname, `./books/${item}.json`), JSON.stringify(bookList))
    console.log(`===获取${item}的bookList结束===，共${bookList.length}条数据`)
    bookList.forEach(async function (item2) {
      //获取每一个 bookId 的详情
      console.log(`===开始获取${item2}的详情===`)
      const bookDetails = await getBookDetailsByBookId(item2)
      //将列表写入文件
      let name = item2.name ? item2.name : "未知名称"
      fs.writeFileSync(
        path.join(__dirname, `./bookDetails/${name}.json`),
        JSON.stringify(bookDetails)
      )
      console.log(`===获取${item2}的详情结束===，共${bookDetails.questions.length}条数据`)
    })
  })
  //   let item2 = {
  //     cateId: "netclass",
  //     bookId: "f9931193ce34",
  //     name: "智慧树知到《有机化学实验》章节测试答案",
  //     author: "",
  //     publisher: "",
  //     cover:
  //       "https://mmbiz.qpic.cn/mmbiz_jpg/lmBnj6RFuibEicubEsTLyiaHGkfnz5LbsJ8ULQe0NqbGprianF8NYsLZuCFGymY2ZO2XrkJibpuvRxCfZJrDoCdokHw/0?wx_fmt=jpeg",
  //   }
  //   ;(async function (item2) {
  //     //获取每一个 bookId 的详情
  //     console.log(`===开始获取${item2}的详情===`)
  //     const bookDetails = await getBookDetailsByBookId(item2)
  //     //将列表写入文件
  //     let name = item2.name ? item2.name : "未知名称"
  //     fs.writeFileSync(
  //       path.join(__dirname, `./bookDetails/${name}.json`),
  //       JSON.stringify(bookDetails)
  //     )
  //     console.log(`===获取${item2}的详情结束===，共${bookDetails.questions.length}条数据`)
  //   })(item2)
})()
