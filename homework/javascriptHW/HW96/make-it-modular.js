'use strict';

const myModule = require('./mymodule.js');
const directory = process.argv[2];
const filter = process.argv[3];

myModule(directory, filter, function (err, list) {
    if (err) {
        return console.error(err);
    }

    list.forEach(file => console.log(file));
})

