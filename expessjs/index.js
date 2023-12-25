const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const port = 4500;
app.set('view engine','ejs');
app.set('views',__dirname+'/view');
const products = [{name:'apple',price:200},{name:'orange',price:300},{name:'mango',price:100}];
router.get('/ejs',(req,res)=>{
    res.render('index',{title:'Nandana',product:products});
})
// app.get('/',(req,res)=>res.send(path.join(__dirname+'/Template/home.html')));
router.get('/home',(req,res)=>{
    res.sendfile(path.join(__dirname+'/Template/home.html'))
});
router.get('/about',(req,res)=>{
    res.sendfile(path.join(__dirname+'/Template/about.html'))
});
router.get('/service',(req,res)=>{
    res.sendfile(path.join(__dirname+'/Template/service.html'))
});
router.get('/product',(req,res)=>{
    res.sendfile(path.join(__dirname+'/Template/product.html'))
});
// app.get('/home',(req,res)=>res.send('this is home'));
// app.get('/about',(req,res)=>res.send('this is about'));

// app.get('/product',(req,res)=>res.send('this is product'));
app.use('/',router)

app.listen(port,()=> console.log("server is running"));


