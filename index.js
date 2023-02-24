const http=require('http');
const hostname='127.0.0.1';
const port=3000;
const server=http.createServer((request,response)=>{
    response.statuscode=200;
    response.setHeader('content-Type','text/plain');
    response.end('Hello\n')
})
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);
})