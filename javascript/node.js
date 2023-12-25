var http = require('http');
var fs=require('fs');
var url= require('url');

http.createServer(function (req, res) {

 if(req.url=='/home'){
    var fname="./home.html";
    fs.readFile(fname,function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    res.end();
    })
    

  }
 else if(req.url=='/product'){
    var fname="./product.html";
    fs.readFile(fname,function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    res.end();
    })
  
  }
  else if(req.url=='/about'){
    var fname="./about.html";
    fs.readFile(fname,function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    res.end();
    })
    
  }
  else if(req.url=='/contact'){
    var fname="./contact.html";
    fs.readFile(fname,function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
    res.end();
    })
    
  }
  else{
  var q=url.parse(req.url,true).query;
  res.write(q.txtname);
  res.write(q.txtlname);
  res.write(q.txtph);
  res.end()
  }
}).listen(4500,'0.0.0.0');