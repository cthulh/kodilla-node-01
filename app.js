var os = require('os');
var logit = require('./modules/logit');
var OSinfo = require('./modules/OSinfo');
var processInfo = require('./modules/processInfo');
var timeConverter = require('./modules/timeConverter');
var fs = require('fs');
var StatMode = require('stat-mode');
var getServer = require('./modules/server');
var dirToTxt = require('./modules/dirToTxt');

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
          dirToTxt();
          break;
        case '/server':
          getServer();
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
