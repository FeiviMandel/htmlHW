'use strict';

const net = require('net');
net.createServer(function listener(socket) {
    let newDate = new Date();
    let date = newDate.getUTCFullYear();    
    if (newDate.getMonth()<9) {
        date += '-0';
    }
    else {
        date += '-';
    }
    date += newDate.getMonth()+1;
    if (newDate.getDate() < 10) {
        date += '-0';
    }
    else {
        date += '-';
    }
    date += newDate.getDate();
    if (newDate.getHours() < 10) {
        date += ' 0';
    }
    else {
        date += ' ';
    }
    date += newDate.getHours();
    if (newDate.getMinutes() < 10) {
        date += ':0';
    }
    else {
        date += ':';
    }
    date += newDate.getMinutes();
    date += '\n';
    socket.end(date);
}).listen(process.argv[2]);
// net.on('error', console.error);

