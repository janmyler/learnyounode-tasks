const fs = require('fs');
const params = process.argv.slice(2);

const PATH = params[0];
const EXT = params[1];

fs.readdir(PATH, (err, list) => {
  if (err) throw err;

  list
    .filter(file => file.endsWith(`.${EXT}`))
    .forEach(file => { console.log(file) })
});
