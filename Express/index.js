const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const router=express.Router();
const app=express();
const port=4000;
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'student'
})
app.set('view engine','ejs');
app.set('views',__dirname+'/Templates');
app.use(bodyParser.urlencoded({extended:true}));

router.get('/student_form',(req,res)=>{
    const selquery="select * from student_data";
    connection.query(selquery,(err,rows,fields)=>{
        console.log("rows:",rows)
        res.render('adddata',{rows})
    })
})

router.get('/student_form',(req,res)=>{
    res.render('adddata');
});
router.post('/submit_data',(req,res)=>{
// res.send('data received');
var name=req.body.txtname;
var cls=req.body.selClass;
var stream=req.body.selStream;
var mark=req.body.txtmark;
var grade=req.body.selGrade;
if(conn=true)
{
    console.log("connection established");
}
strquery= "insert into student_data(name,class,mark,stream,grade)values('"+name+"','"+cls+"','"+mark+"','"+stream+"','"+grade+"')"
connection.query(strquery,(err, rows, fields) => {
    // console.log('there is an error occured')  
    res.redirect('/student_form');
  });
  
//   connection.end()
// res.send('Name - ' + name + ' Class - ' + cls+ ' stream -'+ stream +'mark -'+mark+' grade -'+grade);


});
router.get('/delete_student',(req,res)=>{
    var id=req.query.id;
    delquery="delete from student_data where student_id="+id;
    connection.query(delquery,(err,rows,fields)=>{
        res.redirect('/student_form');
    })
    
})
// router.get('/edit',(req,res)=>{
//     var id=req.query.id;
//     editquery="select from student_data where student_id="+id;
//     connection.query(editquery,(err,rows,fields)=>{
//         res.redirect('/edit',{ student_data: rows[0] });
//     })
       
//         // res.render('adddata');
//         router.post('/update', (req, res) => {
//             const { student_id,name,
//                 cls,
//                 stream,
//                 mark,
//                  grade } = req.body;
        
          
//             const updateQuery = `UPDATE student_data SET name = '${name}' WHERE student_id = ${student_id}`;
        
//             connection.query(updateQuery, (err, result) => {
//                 if (err) {
                  
//                     res.send('Error updating data');
//                 } else {
//                    res.redirect('/update'); 
//                  }
//             });
//         });
        
  
  
// })


router.get('/edit', (req, res) => {
    const id = req.query.id;
    const editquery = "SELECT * FROM student_data WHERE student_id = "+id;
    connection.query(editquery, (err, rows) => {
      if (err) {
        console.log("Error fetching data for editing: " + err);
        res.redirect('/student_form');
      } else {
        res.render('edit_data', { student_data: rows[0] });
      }
    });
  });
  
  router.post('/update', (req, res) => {
    const {name, cls, stream, mark, grade } = req.body;
  
    const updateQuery =  `UPDATE student_data SET name = '${name}', class = '${cls}' , stream = '${stream}', mark = '${mark}', grade ='${grade}' WHERE student_id =`+id;
      connection.query(updateQuery, (err, result) => {
      if (err) {
        console.log("Error updating data: " + err);
        res.redirect('/student_form');
      } else {
        res.redirect('/student_form');
      }
    });
  });

router.get('/',(req,res)=>{
    var data={
        title:'student data',student_data:[
        {
            name:'arun',
            class:'plus two',
            stream:'science',
            mark:'90',
            grade:'A+'
            },
            {
                name:'adhi',
                class:'plus two',
                stream:'science',
                mark:'90',
                grade:'A+'
                },
                {
                    name:'roy',
                    class:'plus two',
                    stream:'humanitis',
                    mark:'90',
                    grade:'A+'
                    },
                    {
                        name:'rahul',
                        class:'plus one',
                        stream:'commerce',
                        mark:'80',
                        grade:'A'
                        },
                        {
                            name:'neha',
                            class:'plus one',
                            stream:'humanities',
                            mark:'92',
                            grade:'A+'
                            },{
                            name:'aadhithya',
                            class:'plus one',
                            stream:'humanities',
                            mark:'52',
                            grade:'B'
                            }                     
           
    ]}
res.render('index',data);

});

app.use(express.static(__dirname+'/public'));
app.use('/',router);
app.listen(port,()=>console.log('server is runnning'));