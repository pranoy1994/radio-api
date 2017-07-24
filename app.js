const express = require('express');
var port = process.env.PORT || 3000;
var routes = require('./route');
var app = express();

app.use('/', routes);


app.listen(port, function(){
  console.log(`Express server listening on port ${port}`);
});