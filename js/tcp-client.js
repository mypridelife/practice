var net = require('net')

var client = net.connect({ port: 8124 }, () => {
  console.log('client connect')

  client.on('data', function(data) {
    console.log(data + '')
    client.end()
  })
  client.on('end', function() {
    client.end()
  })
})
