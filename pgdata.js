const express = require('express');
const app = express();


const Pool = require('pg').Pool;
const pool = new Pool ({
    user:'postgres',
    host:'localhost',
    database:'',
    password:'',
    port:
})

app.get('/',(req,res)=>{
    pool.query('SELECT * FROM "PatientDetails"', (err,result)=>{
        res.status(200).json(result.rows);
    });
})

app.get('/data',(req,res)=>{
    pool.query('SELECT * FROM kdata',(err,result)=>{
        res.status(200).json(result.rows);
    });
})

app.get('/stud',(req,res)=>{
    pool.query('SELECT * FROM students',(err,result)=>{
        res.status(200).json(result.rows);
    })
})
app.listen(5001);
