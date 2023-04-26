var http = require('http');
var uc = require('upper-case');

http.createServer(function (req,res){
    res.writeHead(200,{'content-type':'text/html'});

    res.write(uc.upperCase('<h1>this is node js</h1>'+
    '<p>this tutorial</p>'+'<br><br>'+
    '<h6>there are field that grow in end that easy to acces.</h6>'));

    res.end();
}).listen(3000);