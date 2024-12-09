const express = require('express')
const app = express();
const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'1q2w3e4r5t',
    port:5432
})

// filter table
app.get('/',(req,res) => {
    
    pool.query(`SELECT * FROM detail where name='raja'`,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result.rows);
    });
})

//delete
app.get('/user',(req,res) => {
    
    pool.query(`DELETE FROM detail where name='varub'  RETURNING *`,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result.rows);
    });
})

//update
app.get('/upd',(req,res) => {
    
    pool.query(`INSERT INTO detail (name,dept,degree) VALUES ('thiyagu','MECH','BE')`,`(SELECT * FROM detail)`,(err,result)=>{
        if(err){
            throw err
        }
        res.send(result.rows);
    });
})
app.listen(5007);
