const express = require('express');
const app = express();


const Pool = require('pg').Pool;
const pool = new Pool ({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'1q2w3e4r5t',
    port:5432
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

