const { json } = require('body-parser');
const express = require('express');
const app = express();

const Pool= require('pg').Pool;
 const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'',
    port:
 })

  app.get('/',(req,res)=>{
  pool.query('SELECT * FROM kdata', (err,result) => {
        console.log(result.rows);
        res.status(200).json(result.rows);
    });
    });
   //  const getUserById = (request,response) = {
   //    const {Name,email} = request.body
   //    pool.query('INSERT INTO kdata ("ID", "Name", "Email", "Address", "Dept", "Year_joining", "Year_complete", "Currentlystudy_year")')
   //  }
    app.listen(3007);
