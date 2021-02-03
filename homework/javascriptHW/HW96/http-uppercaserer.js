'use strict';

const fs = require('fs');
const http = require('http');
http.createServer(function (req, res) {
    const map = require('through2-map')
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
}).listen(process.argv[2]);

