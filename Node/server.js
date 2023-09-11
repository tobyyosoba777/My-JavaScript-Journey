const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

server.listen(3008, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3008/');