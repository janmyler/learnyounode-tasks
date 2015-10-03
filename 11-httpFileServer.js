const http = require('http');
const fs = require('fs');
const params = process.argv.slice(2)

const PORT = Number(params[0])
const FILE = params[1]

http.createServer((req, res) => {
  let src = fs.createReadStream(FILE);
  src.pipe(res);
})
.listen(PORT)
