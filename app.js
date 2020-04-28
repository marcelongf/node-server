const http = require('http');


const server = http.createServer(function(req, res) {
    console.log(req.url, req.methods, req.headers);
});

console.log("test");
server.listen(3000);