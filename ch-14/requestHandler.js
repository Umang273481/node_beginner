var querystring = require('querystring'),
    fs = require("fs"),
    formidable = require("formidable");

function start(response) {
    console.log("\nRequest handler 'start' was called.\n");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload" multiple="multiple">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

}
    
function upload(response, request) {
    console.log("\nRequest handler 'upload' was called.\n");

    var form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(request, function(error, fields, files) {
        console.log("parsing done");
        /* Possible error on Windows systems:
        tried to rename to an already existing file */
        var oldpath = files.upload.filepath;
        var newpath = '/home/shresh/Pictures/photo.png';
        fs.rename(oldpath,newpath, function(error) {
            if (error) {
                throw error;
                //fs.unlink("/home/shresh/node_beginner/ch-14/photo.png");
                //fs.rename(files.upload.path, "/home/shresh/node_beginner/ch-14/photo.png");
            }
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='show' />")
        response.end();
    });
}

function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("/home/shresh/Pictures/photo.png").pipe(response);
}
module.exports = {
    start : start,
    upload : upload,
    show : show
}
// exports.start = start;
// exports.upload = upload;
// exports.show = show;