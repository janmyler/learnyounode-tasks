'use strict'

const params = process.argv.slice(2);

let sum = params.reduce((sum, n) => sum + Number(n), 0)
console.log(sum);
