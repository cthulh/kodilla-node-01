var logit = require('./modules/logit');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

  var input = process.stdin.read();

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
