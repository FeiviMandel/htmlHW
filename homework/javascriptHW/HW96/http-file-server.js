'use strict';

const fs = require('fs');
const http = require('http');
http.createServer(function callback(req, res) {
    const readStream = fs.createReadStream(process.argv[3])
    readStream.pipe(res);
}).listen(process.argv[2]);