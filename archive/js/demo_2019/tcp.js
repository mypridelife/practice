var net = require('net')

var server = net.createServer(socket => {
  socket.on('data', function(data) {
    console.log('open data')
    socket.write('你好')
  })
  socket.on('end', function() {
    console.log('连接断开')
  })
  socket.write('欢迎')
})

server.listen(8124, () => {
  console.log('server bound')
})
