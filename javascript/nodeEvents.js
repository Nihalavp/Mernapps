const http = require('http');
const EventEmitter = require('events');

// Create a custom event emitter for handling requests
const requestEmitter = new EventEmitter();

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Emit the 'request' event when a request is received
  requestEmitter.emit('request', req, res);
});

// Listen for the 'request' event and handle it
requestEmitter.on('request', (req, res) => {
  // Handle the request and send a response
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
