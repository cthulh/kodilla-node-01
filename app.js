var os = require('os');
var logit = require('./modules/logit');
var OSinfo = require('./modules/OSinfo');
var processInfo = require('./modules/processInfo');
var timeConverter = require('./modules/timeConverter');
var fs = require('fs');
var StatMode = require('stat-mode');
var http = require('http');

processInfo();

logit('Enter instruction: ');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    if (isNaN(input)){
      var instruction = input.toString().trim();
      switch(instruction) {
        case '/exit':
          logit('Quitting app!');
          process.exit();
          break;
        case '/sayhello':
          logit('hello!');
          break;
        case '/getOSinfo':
          OSinfo.print();
          break;
        case '/img':
          fs.stat('./img/cat.jpg', (err, stats) => {
            var statMode = new StatMode(stats);
            logit(statMode.toString());
          });
          break;
        case '/dirToTxt':
          fs.readdir('./modules/', (err, files) => {
            var listOfFiles = '';
            files.forEach( file => listOfFiles += file + '\n');
            fs.writeFile('./txt.txt', listOfFiles, function(){
              fs.readFile('./txt.txt', 'utf-8', (err, data) => {
                logit('Files: ');
                logit(data);
              });
            });
          });
          break;
        case '/server':
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
          break;
        default:
          logit('Wrong instruction!');
          logit('');
      };
    } else {
      logit('');
      logit('Converting input to hours minutes seconds format');
      logit('');
      var seconds = input.toString().trim();
      logit(timeConverter(seconds));
    }
  }
});
