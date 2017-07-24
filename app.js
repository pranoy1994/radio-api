const express = require('express');

var routes = require('./route');
var app = express();

app.use('/', routes);

app.listen('3000', ()=>{
console.log("Server is running on port 3000");
});