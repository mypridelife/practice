var http = require("http")

const options = {
  url: `https://api.day.app/9s2ucaPVCVVvnaGPD99Ljm/%E6%B5%8B%E8%AF%95/%E6%B5%8B%E8%AF%95%E5%86%85%E5%AE%B9?sound=calypso&isArchive=1`,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  path: "/",
  method: "GET",
}
// var options = { hostname: '127.0.0.1', port: 1337, path: '/', method: 'GET' }
var req = http.request(options, function (res) {
  console.log("STATUS: " + res.statusCode)
  console.log("HEADERS: " + JSON.stringify(res.headers))
  res.setEncoding("utf8")
  res.on("data", function (chunk) {
    console.log(chunk)
  })
})
req.end()
