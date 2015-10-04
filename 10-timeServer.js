'use strict'

const net = require('net')
const params = process.argv.slice(2)

const PORT = Number(params[0])

function zp(num) {
  return (num < 10 ? '0' : '') + num
}

// Raw TCP server
net.createServer(socket => {
  const d = new Date()
  let time = `${d.getFullYear()}-${zp(d.getMonth() + 1)}-${zp(d.getDate())} ${d.getHours()}:${d.getMinutes()}\n`
  socket.end(time)
})
.listen(PORT);
