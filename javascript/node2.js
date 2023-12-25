var http=require('http');
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end("hello world");

    if(req.url=='/home');
   var fname="/home";
   fs.readFile(fname,function(err,data){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(data);
    res.end();
   })

}).listen(1000);