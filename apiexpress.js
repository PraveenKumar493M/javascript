const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'',
    password:'',
    port:
});

app.post('/show',(req,res)=>{
    var data = req.body.user;
    let name = data.name;
    let dept = data.dept;
    let degree = data.degree;
    pool.query(`insert into detail (name,dept,degree) values ('${name}','${dept}','${degree}')`);
});
app.get('/all',(req,res)=>{
    let all = req.params.all;
    pool.query(`select * from detail`,(error,result)=>{
        res.send(result.rows);
        
    });
});
app.get('/name/:user',(req,res)=>
{
    let user = req.params.user;
    pool.query(`select * from detail where name like '%${user}%' `,(error,result)=>{
        res.send(result.rows);
      
    });
});

app.get('/dept/:user',(req,res)=>{
    let user = req.params.user;
    pool.query(`select * from detail where dept like '%${user}%'`,(error,result)=>{
        res.send(result.rows);
    });
});

app.post('/update',(req,res)=>{
    var data = req.body;
    let name = data.name;
    let dept = data.dept;
    let degree = data.degree;

    pool.query(`update detail set name='${name}',dept='${dept}',degree='${degree}'`)
});


app.listen(4002);
