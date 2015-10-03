const http = require('http');
const params = process.argv.slice(2);

http.get(params[0], res => {
  var data = '';
  res.setEncoding('utf8')
    .on('data', str => data += str)
    .on('error', console.error)
    .on('end', () => {
      console.log(data.length);
      console.log(data);
    })
})
