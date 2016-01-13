var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));
app.use(express.static(rootPath + '/node_modules'));
app.listen(8000);
console.log(rootPath)
console.log('server up on 8000');