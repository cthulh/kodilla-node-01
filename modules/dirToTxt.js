var logit = require('./logit');
var fs = require('fs');

function dirToTxt() {
  fs.readdir('./modules/', (err, files) => {
    fs.writeFile('./txt.txt', files.join('\n'), function(){
      fs.readFile('./txt.txt', 'utf-8', (err, data) => {
        logit('Files: ');
        logit(data);
      });
    });
  });
}

module.exports = dirToTxt;
