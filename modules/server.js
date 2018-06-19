var http = require('http');
var fs = require('fs');
var logit = require('./logit');

function getServer() {
  var server = http.createServer();
  server.on('request', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
      fs.readFile('./index.html', 'utf-8', (err, data) => {
        response.write(data);
        response.end();
      });
    } else {
      response.statusCode = 404;
      response.write('<h1>404: Error, request unknown.</h1>');
      response.end();
    }
  });
  server.listen(9000);
  logit('\nResponse ready on localhost:9000\n');
}

module.exports = getServer;
