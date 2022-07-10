const http = require('http');
const fs = require('fs');

// Status Code 200 = OK
// Status Code 404 = Not Found

// const port = process.env.PORT;   // Default Port
const port = 3000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        const html = fs.readFileSync('index.html');
        res.end(html.toString());
    } else if (req.url == '/arin') {
        res.statusCode = 200;
        res.end('<h1> This is Arin Dewangan </h1>');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> This is About Arin Dewangan </h1>');
    } else {
        res.statusCode = 404;
        res.end('<h1> Page Not Found </h1>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})