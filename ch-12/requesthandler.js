function start() {
    console.log("Request handler 'start' was called.");

    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
        console.log("SLEEP")
    }

    sleep(10000);
    return "Hello Start";

}

function upload() {
    console.log("Request handler 'upload' was called.");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;
 /*
var exec = require("child_process").exec;

function start() {
console.log("Request handler 'start' was called.");
var content = "empty";

exec("ls -lah", function (error, stdout, stderr) {
content = stdout;
});

return content;

}

function upload() {
console.log("Request handler 'upload' was called.");
return "Hello Upload";
}
exports.start = start;
exports.upload = upload;
*/