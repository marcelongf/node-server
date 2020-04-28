const http = require('http');


const server = http.createServer(function(req, res) {
    console.log(req.url, req.methods, req.headers);
});

server.listen(3000);