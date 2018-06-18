var os = require('os');
var logit = require('../modules/logit');
var OSinfo = require('../modules/OSinfo');
var processInfo = require('../modules/processInfo');
var timeConverter = require('../modules/timeConverter');

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
