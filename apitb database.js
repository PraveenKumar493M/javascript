const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());
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
    database:'postgres',
    host:'',
    password:'',
    port:
});

app.post('/show',(req,res)=>{
    var data = req.body;
    var id2 = parseInt(data.id);
    var name2 = data.name;
    var DOB2 = data.DOB;
    var phnumber2 = data.phnumber;
    var city2 = data.city;
    pool.query(`INSERT INTO public.medi(
        id, name, "DOB", phnumber, city)
        VALUES (${id2}, '${name2}', '${DOB2}', ${phnumber2}, '${city2}');`);
});

app.get('/all',(req,res)=>{
    let all = req.params.all;
    pool.query('select * from medi order by id',(error,result)=>{
        res.send(result.rows);
    });
});

app.get('/id/:user',(req,res)=>{
    let user = req.params.user;
    pool.query(`select * from medi where id=${user} `,(error,result)=>{
        res.send(result.rows);
    });
});

app.post('/delete',(req,res)=>
{
    var id3=parseInt(req.body.id);
    console.log(id3);
    pool.query(`delete from medi where id=$1;`,[id3],(error,result)=>{
        res.send("data deleted");
    })  
});

app.post('/update',(req,res)=>{
    var data1 = req.body;
    var id5 = parseInt(data1.id); 
    var name5 = data1.name;
    pool.query(`update medi set name='${name5}' where id=${id5};`,(error,result)=>{
        if(error){throw error;}
        res.send("data updated");
    })
})

app.listen(5000);
