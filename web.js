const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded(
    {
        extended: true
        }
))


const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    database:'',
    host:'',
    password:'',
    port:
})

app.post('/show',(req,res)=>{
    var inf = req.body.data;
    let id = inf.id;
    let name = inf.name;
    let DOB = inf.DOB;
    let phnumber = inf.phnumber;
    let city = inf.city;
    pool.query(`insert into medi (id,name,DOB,phnumber,city) values ('${id}','${name}','${DOB}','${phnumber}','${city}' )`);
});

app.get('/all',(req,res)=>{
    let all = req.params.all;
    pool.query('select * from medi',(error,result)=>{
        res.send(result.rows);
    });
});

app.get('/id/:data',(req,res)=>{
    let data = req.params.data;
    pool.query(`select * from medi where id=${data} `,(error,result)=>{
        res.send(result.rows);
    });
});


app.listen(5000);



    // app.get('/name/:data',(req,res)=>{
    //     let data = req.params.data;
    //     pool.query(`select * from medi where name like '%${data}%' `,(error,result)=>{
    //         res.send(result.rows);
    //     });
    // });
