const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Contener-Type','text/html')
    console.log(req.url)
    if(req.url=='/about')
    {
        res.end('<hl>This is codeWithGarima</h1> <p> Hey welcome to the world of node js!</p>');
    }
    else if(req.url =='/about'){
        res.end('<h1>About node js</h1> <p>This is about node js!</p>')
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Not found</h1> <p>This page was not found on the server</p>')
    }
})
server.listen(port,()=>{
    console.log('Server is listening on port ${port}');
})