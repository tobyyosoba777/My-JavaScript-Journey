// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world!\n');
// });

// server.listen(3008, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:3008/');




var http = require('http');
var server = http.createServer(function(request, response) {
    console.log("got a request!");
    response.write("hi, its meee again");
    response.end();
});

server.listen(3003);

// var http = require("http")
// var server = http.createServer(function(req, res) {
//     console.log("got a request");
//     res.write("hi its meii\n\t\n");
//     res.end("hello world!\n");
// });

// server.listen(3003);