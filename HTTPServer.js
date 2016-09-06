const http = require('http');
const mime = require("./noype");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const cont = mime(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', cont);
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
