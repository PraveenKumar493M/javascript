var http = require('http');
var dt = require('./date.js');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write.upperCase('Hello manage is hard ') + dt.myDate();
  fs.readFile('empty.html' , 'utf-8', (err,data) => {
       if(err){
        res.write("404 found")
      }
      else{
        res.write(data);
      }
  });
  res.end();
}).listen(1000);


