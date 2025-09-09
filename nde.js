var http = require ('http');
http.createServer(function (req,res){
res.writeHead(200,{'content-type':'text/html'});
    res.write("<h1>this is form on node js.</h1>");
    res.write('<form action="fileupload" method="post" enctype="mltipart/form-data"');
    res.write('<input type="text" name="filetoupload"><br>');
    res.write('<input type="file" name="filetoupload" required ><br>');
    res.write('<input type="submit" name="filetoupload">');
    res.write('</form>');
    res.end();
}).listen(8007);

