
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('content-Type','text/html')
    res.end('<h1>This is Shyam</h1> <p>Hey, How are you!</p>');
}) 

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});