const http = require('http');
const server = http.createServer(function (req, res) {
    console.log("URL:" + req.url);
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    res.end('Hello World!');
});

server.listen(3000, '127.0.0.1');
console.log('Listen port 3000');