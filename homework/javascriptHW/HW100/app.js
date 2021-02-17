var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const contactsRouter = require('./routes/contacts');
const apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contacts', contactsRouter);
app.use('/api', apiRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', { partials: { content: 'error' } });
});

app.locals.appTitle = 'PCS Contacts App';
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test1234',
  database: 'pcscontacts'
});

connection.connect();

/*connection.query('SELECT * FROM contacts', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();*/

// DONT DO THIS - temporary
global.db = connection;

module.exports = app;
