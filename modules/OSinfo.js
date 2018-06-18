var logit = require('./logit');
var os = require('os');
var timeConverter = require('./timeConverter');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    logit(release);
    var cpu = os.cpus()[0].model;
    logit(cpu);
    var uptime = timeConverter(os.uptime());
    logit(uptime);
    var userInfo = os.userInfo();
    logit(userInfo);
    logit('----------------------------------\n\n');
    logit('System: '.gray + type);
    logit('Release: '.red + release);
    logit('CPU model: '.magenta + cpu);
    logit('Uptime: ~'.green + uptime);
    logit('User name: '.yellow + userInfo.username);
    logit('Home dir: '.grey + userInfo.homedir);
}

module.exports = {
  print: getOSinfo
}
