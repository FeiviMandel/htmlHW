const fs = require('fs');
const buffer = fs.readFileSync(process.argv[2]);
const str = buffer.toString();
const split = str.split('\n');
console.log(split.length-1)