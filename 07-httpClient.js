const http = require('http');
const params = process.argv.slice(2);

http.get(params[0], res => {
  res.setEncoding('utf8')
    .on('data', console.log)
    .on('error', console.error)
})
