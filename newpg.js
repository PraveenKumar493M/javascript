const express = require('express')
const app = express();
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: '',
  password: '',
  port: ,
})

app.get('/',(request, response) => {
    pool.query('SELECT * FROM students', (error, results) => {
      if (error) {
        throw error
      }
      console.log(results.rows);
      response.status(200).json(results.rows);
    })
  });

  app.get('/user',(request,response)=>{
    pool.query('SELECT * FROM public.kdata' , (error,results)=>{
      if(error){
        throw error;
      }
      response.status(200).json(results.rows);
    })
  })
// const getUserById = (req,res)=>{
//   const id = parseInt (req.params.Name)

//   pool.query('SELECT * FROM students where Name = ram',[Name],(error,result)=>{
//     if(error){
//       throw(error);
//     }
//     res.status(200).json(result.rows);
//   })
// }

  app.listen(2004);
