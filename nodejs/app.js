const http = require('http');
const fs = require('fs');

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

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Submit The Form</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log('chunk', chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            console.log("body", body);
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
})

server.listen(3000);

