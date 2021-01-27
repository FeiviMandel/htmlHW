const fs = require('fs');
const path = require('path');
const extensionName = ('.'+ process.argv[3]);
fs.readdir(process.argv[2], callback)
function callback(err, list) {
    for (let index = 0; index < list.length; index++) {
        if (extensionName === path.extname(list[index])){
            console.log(list[index]);
              }  
    }
 }