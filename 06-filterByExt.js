'use strict'

const fs = require('fs');

module.exports = function(path, ext, cb) {
  ext = ext || '';
  fs.readdir(path, (err, list) => {
    if (err) return cb(err);

    let filtered = list.filter(file => file.endsWith(`.${ext}`));
    cb(null, filtered);
  });
}
