const http = require('http')
const map = require('through2-map')

const params = process.argv.slice(2)
const PORT = Number(params[0])

http.createServer((req, res) => {
  if (req.method === 'POST') {
    req
      .pipe(map(chunk => chunk.toString().toUpperCase()))
      .pipe(res)
  }
})
.listen(PORT)
