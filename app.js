const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const controllers = require('./server/controllers')

const router = express.Router();

// const uris = require('./server/helpers/uris');
const index = require('./server/routes/index');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'dist')));

// middleware that exposes some helpers to the views
// app.use(function(req, res, next) {
//   res.locals.uris = uris;
//   res.locals.flash = null;
//   next();
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// catch 404 and forward to error handler

router.post('/auth/signin', () => {
  console.log('tvoya mamka')
});

// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });


// error handler
// app.use(function(err, req, res, next) {

//   // set locals, only providing error in development
  
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });



module.exports = app;
