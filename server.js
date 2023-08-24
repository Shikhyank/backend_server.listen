let http=require('http');
let server=http.createServer((req,res)=>{
    console.log('hello world');
})
server.listen(4000);