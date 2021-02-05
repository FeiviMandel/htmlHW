const url = require('url');
const app = require('connect')();

app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});
app.use((req, res, next) => {
    const parsedUrl = url.parse(req.url, true);
    req.query = parsedUrl.query;
    next();
});
app.use(require('./sayPlease'));

app.use('/home', (req, res, next) => {
    res.end('<h1>Welcome to PCS</h1>');
});

app.use('/about', (req, res, next) => {
    res.end('<h1>PCS is a great organization</h1>');
});

app.use((error, req, res, next) => {
    res.statusCode = 400;
    res.end(error.message);
});

app.listen(80);