var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  const userName = req.cookies['userName'] ? JSON.parse(req.cookies['userName']) : {};
  const settings = {
    name: req.query.userName || userName.userName || ''
    }
  res.cookie('userName', JSON.stringify(settings.name), { maxAge: 20000 });
  res.locals.userName = settings.name;
  next();
});

app.use((req, res, next) => {
  let incrementer = req.cookies['incrementerCookie'] ? JSON.parse(req.cookies['incrementerCookie']) : 0;  
  res.cookie('incrementerCookie', JSON.stringify(++incrementer), { maxAge: 20000 });
  res.locals.incrementer = incrementer;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

module.exports = app;
