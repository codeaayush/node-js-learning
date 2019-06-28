var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log('server started');
  res.end('Hello World!');
});

server.listen(8080, function(){
    console.log('server started ')
});