const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./form.js');
const port = 4000;
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/',(request,response)=>{
    response.json({info:'Node.js,express and postgres'})
})

app.get('/',db.getName);
app.listen(port,()=>{
    console.log(`port running ${port}.`)
})

