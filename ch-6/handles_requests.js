var http = require("http");

function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.write("When the callback fires and our onRequest() function gets triggered, two parameters are passed into it: request and response\n");
    response.write("Whenever a request is received, it uses the response.writeHead()\nfunction to send an HTTP status 200 and content-type in the HTTP response header, and the\nresponse.write() function to send the text “Hello World” in the HTTP response body.");
    response.end();
}

http.createServer(onRequest).listen(8081);

console.log("Server has started..")