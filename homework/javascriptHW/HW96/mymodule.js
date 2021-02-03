'use strict';

const fs = require('fs');
const path = require('path')

module.exports = function (directory, fileName, callback) {

    fs.readdir(directory, function (err, list) {
        if (err) {
            return callback(err);
        }
        list = list.filter(function (file) {
            return path.extname(file) === '.' + fileName
        })
        callback(null, list);
    });
}