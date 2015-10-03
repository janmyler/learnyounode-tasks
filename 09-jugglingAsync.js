const rp = require('request-promise');
const params = process.argv.slice(2);

Promise
  .all(params.map(url => rp(url)))
  .then(values => {
    values.forEach(data => console.log(data))
  })
