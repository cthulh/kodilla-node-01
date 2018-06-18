function timeConverter(time){

    var hrs = Math.floor(time / 3600);
    var mins = Math.floor((time % 3600) / 60);
    var secs = (time % 60).toFixed(0);

    var output = "";

    if (hrs > 0) {
        output += "" + hrs + "h " + (mins < 10 ? "0" : "");
    }

    output += "" + mins + "min " + (secs < 10 ? "0" : "");
    output += "" + secs + "sec " ;
    return output;
}

module.exports = timeConverter;
