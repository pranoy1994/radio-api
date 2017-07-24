const express = require('express');
var port = process.env.PORT || 9000;
var routes = require('./route');
var app = express();

app.use('/', routes);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});


app.listen(port, function(){
  console.log(`Express server listening on port ${port}`);
});