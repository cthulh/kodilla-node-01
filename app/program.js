var os = require('os');
var logit = require('../modules/logit');
var OSinfo = require('../modules/OSinfo');
var processInfo = require('../modules/processInfo');

processInfo();

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {

  let input = process.stdin.read();
  if (input !== null) {
    logit(input);
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
    };
  }

});
