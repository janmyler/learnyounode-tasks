const fs = require('fs');
const params = process.argv.slice(2);

const path = params[0];
fs.readFile(path, (err, data) => {
  if (err) throw err;
  const lineCount = data.toString().split('\n').length - 1;
  console.log(lineCount);
});
