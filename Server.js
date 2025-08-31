import http from 'http';

// url = http://localhost:3000/
const PORT=3000;
const server =http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    // res.statusCode=404;
    res.write("From Write Method")
    res.end('Hello World');
})

server.listen(PORT,()=>{
    console.log("Server Is running");
})