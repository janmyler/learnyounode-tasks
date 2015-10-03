const net = require('net')
const params = process.argv.slice(2)

const PORT = Number(params[0])

// Raw TCP server
net.createServer(socket => {
  const now = new Date()
  let time = `${now.toISOString().slice(0,10)} ${now.getHours()}:${now.getMinutes()}\n`
  socket.end(time)
})
.listen(PORT);
