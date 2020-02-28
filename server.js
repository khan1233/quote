var http = require('http');

function handleRequest(request, response) {
    response.writeHead(200, { 'content-Type': 'text/plain' });
    response.end('Hello World !!');
}
var server = http.createServer(handleRequest);
var port = 3000;

server.listen(port);
console.log('Server Started at http://localhost:3000');