var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!!!");
    response.end();
}
http.createServer(onRequest).listen(8081);

console.log("server running on port 8081");