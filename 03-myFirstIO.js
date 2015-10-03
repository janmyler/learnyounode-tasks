const fs = require('fs');
const params = process.argv.slice(2);

const path = params[0];
const file = fs.readFileSync(path).toString();

console.log(file.split('\n').length - 1);
