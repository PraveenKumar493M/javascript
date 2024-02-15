var express = require('express');
var app = express();

const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'',
    port:
})


const getName = (request,response) =>{
    pool.query(`SELECT * FROM detail WHERE name`,(error,result) =>{
         if(error){
            throw error
        }
        response.json(result.rows);
    });
}
 module.exports = {
    getName
 }



































// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write('<form action = "/" method="post" enctype = "multipart/form-data>')
//      res.write('<label for="name">Enter name: </label>')  
//      res.write('<input type ="text" name="name" required><br>')
//     res.write('<input type ="text" name="dept" required><br>')
//     res.write('<input type ="text" name="degree" required><br>')
//     res.write('<input type ="submit">')
//     res.write('</form>')
//     return res.end();
