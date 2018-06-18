var logit = require('../modules/logit');

function processInfo() {
  logit('----------------------------------\n\n');
  logit('System language: ');
  logit(process.env.LANG);
  logit('Node version: ');
  logit(process.versions.node);
  logit('');
  logit('Enter instruction: ');
}

module.exports = processInfo;