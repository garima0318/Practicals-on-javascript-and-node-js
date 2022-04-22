const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Contener-Type','text/html')
    res.end('<hl>This is codeWithGarima</h1> <p> Hey welcome to the world of node js!</p>');
})
server.listen(port,()=>{
    console.log('Server is listening on port ${port}');
})