'usev strict';
const bl = require('bl');
const http = require('http');
http.get(process.argv[2], function callback(response) {
    // response.setEncoding('utf8');
    response.pipe(bl(function (err,data) {
        
    // response.on('data', function (data) {
        console.log(data.length);
        console.log(data.toString());
    }))
})