'use strict';

const http = require('http');
const bl = require('bl');
const results = [];
let counter = 0;
for (let index = 0; index < 3; index++) {
    http.get(process.argv[2+index], function callback(response) {
        response.pipe(bl(function (err, data) {
            
            results[index] = data.toString();
            counter++;
            if (counter===3) {
                results.forEach(result => console.log(result));
            }
        }))
    })
}


