'use strict';

var express = require('express')
  , app = express()
  ;

// log requests
app.use(require('morgan')('dev'));

// static middleware
app.use(express.static(__dirname + '/../build/'));

app.listen(3000);
console.log('Server is listening on port 3000');
