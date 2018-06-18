var logit = require('../modules/logit');
var os = require('os');
var timeConverter = require('../modules/timeConverter');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = timeConverter(os.uptime());
    var userInfo = os.userInfo();
    logit('----------------------------------\n\n');
    logit('System:', type);
    logit('Release:', release);
    logit('CPU model:', cpu);
    logit('Uptime: ~', (uptime / 60).toFixed(0), 'min');
    logit('User name:', userInfo.username);
    logit('Home dir:', userInfo.homedir);
}

module.exports = {
  print: getOSinfo
}
