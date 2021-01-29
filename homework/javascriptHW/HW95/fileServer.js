const http = require('http');
const fs = require('fs/promises');
const path = require('path');

const contentTypes = {
  html: 'text/html',
  js: 'text/js',
  css: 'text/css'
};

http.createServer(async (req, res) => {
  console.log('[' + req.url + ']');

  if (req.url === '/') {
    res.statusCode = 301;
    res.setHeader('Location', '/index.html');
  }
  else {
    try {
      const fileContents = fs.createReadStream(`public/${req.url}`);
      const ext = path.extname(req.url);
      res.setHeader('content-type', contentTypes[ext ? ext.substring(1) : 'html']);
      fileContents.pipe(res)
    } catch (err) {
      switch (err.code) {
        case 'ENOENT':
          res.statusCode = 404;
          res.write('No such page. 404');
          break;
        default:
          res.statusCode = 500;
          res.write('Unknown server error');
      }
    }
  }

  res.end();
}).listen(80);
