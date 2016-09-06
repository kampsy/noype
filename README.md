Noype is a package that helps HTTP Servers identify file formats and
format content transmitted on the internet.


## Installation

Put noype.js in the same dir as you server code.


# Usage

A production ready HTTP Server. Not that the following code
only works if noype.js is in the same directory as the server code.
```js
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
```

# Workthrough

Require noype.
```js
const mime = require("./noype");
```
Pass req.url to noype.
```js
const cont = mime(req.url);
```
Add the result to HTTP header.
```js
res.setHeader('Content-Type', cont);
```


## License
BSD style - see license file.

## Developer
kampamba chanda (a.k.a kampsy).
<br>
Google+: ***google.com/+kampambachanda***
<br>
Twitter: ***@kampsy***
<br>
email: ***kampambachanda@gmail.com***
