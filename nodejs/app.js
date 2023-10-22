const http = require('http');
const fs = require('fs');
const routes = require('./routes');

// http.createServer(function(req, res){
//     console.log("req", req);
// }).listen(3000);

// const server = http.createServer((req, res) =>{
//     console.log("req.url", req.url);
//     console.log("req.method", req.method);
//     console.log("req.headers", req.headers);

//     res.setHeader('Content-Type', 'text/plain');
//     res.write("Hello Form NodeJS Server");

//     // res.setHeader('Content-Type', 'text/html');
//     // res.write('<html>');
//     // res.write('<head><title>Home</title></head>');
//     // res.write('<body><h1>Hello Form NodeJS Server</h1></body>');
//     // res.write('</html>');
//     res.end();
// });

const server = http.createServer(routes);

server.listen(3000);

