const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req,res) => {
    res.send('Hello World')
     });

app.put('/user', (req, res) => {
        res.send('Got a PUT request at /user')
      });

app.post('/pos' , (req,res) =>{
    res.send('got a post method')
});

app.listen(port, () => {
        console.log(`listen port ${port}`)
    });
