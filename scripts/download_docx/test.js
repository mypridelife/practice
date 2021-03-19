var axios = require("axios")

axios({
  method: "GET",
  url: `https://api.day.app/HWcvcC87JQLeBAwxB5EvuH/%E6%B5%8B%E8%AF%95/%E6%B5%8B%E8%AF%95%E5%86%85%E5%AE%B9?sound=calypso`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})

function BarkNotify(text, desp, barkSound = "silence", params = {}) {
  return new Promise((resolve) => {
    const options = {
      url: `https://api.day.app/HWcvcC87JQLeBAwxB5EvuH//${encodeURIComponent(
        text
      )}/${encodeURIComponent(desp)}?sound=${barkSound}&${querystring.stringify(params)}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          console.log("\nBark APP发送通知调用API失败！！\n")
          console.log(err)
        } else {
          data = JSON.parse(data)
          if (data.code === 200) {
            console.log("\nBark APP发送通知消息成功\n")
          } else {
            console.log(`\n${data.message}\n`)
          }
        }
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resolve()
      }
    })
  })
}
