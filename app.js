"use strict";
var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.locals.pretty = true;


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require("express-session")({
    secret: 'catty tail',
    resave: true,
    saveUninitialized: true
}));

//===========   passport setup   =============
var passport = require('./modules/auth/config/passport').initial();
app.use(passport.initialize());
app.use(passport.session());
//===========   passport setup END  =============


var routeMap = {
    "/": "./modules/root/routes/route",
    "/dash": "./modules/dashRoot/routes/route",
    "/dash/bookmark": "./modules/bookmark/routes/route",
    "/home": "./modules/homepage/routes/route",
    "/auth": "./modules/auth/routes/route"
};

for(var oneUrl in routeMap){
    if(routeMap.hasOwnProperty(oneUrl)){
        app.use(oneUrl, require(routeMap[oneUrl]));
    }
}

//--------   mongodb connections    ---------
var mongo = require('./utility/mongo/connect');
mongo.connect();

//---------------    error handling below start:     ----------------
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found: unknow URL request');
    console.error(err.message);
    err.status = 404;
    next(err);
});

// development environment error handler
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      console.error(err.message);
      res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production environment error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
});
//---------------    error handling below END   ----------------

module.exports = app;
