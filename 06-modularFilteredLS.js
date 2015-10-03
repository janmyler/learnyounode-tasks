const filterByExt = require('./06-filterByExt');
const params = process.argv.slice(2);

const PATH = params[0];
const EXT = params[1];

filterByExt(PATH, EXT, (err, data) => {
  if (err) console.error('Oops', err);

  data.forEach(file => console.log(file));
})
