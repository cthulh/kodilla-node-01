var logit = require('./logit');
var colors = require('colors');

function processInfo() {
  logit('----------------------------------\n\n');
  logit('System language: ');
  logit(process.env.LANG.green);
  logit('Node version: ');
  logit(process.versions.node.green);
  logit('');

}

module.exports = processInfo;
