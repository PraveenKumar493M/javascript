var http = require('http');
var fs = require ('fs');
var formidable = require('formidable');
var uc = require('upper-case');
// res.write('<form action="/biodata" method="post" enctype:"multipart/form-data">')

http.createServer(function (req,res){
    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<form action="/biodata" method:"post" enctype:"multipart/form-data">');
        res.write(uc.upperCase('<h1>enter your details</h1>'+'<p>project work until .</p>'));
        res.write('Name<input type="text" name:"username" required><br>');
        res.write('Age<input type="text" name="Age" required><br>');
        res.write('Email<input type="text" name="Email" required><br>');
        res.write('Uploadfile<input type="file" name="uploadfile" required><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    } else if(req.url=='/biodata'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err,fields,files){
            res.write('<h1>Name'+fields.username+'</h1><br>');
            res.write('<h1>Age'+fields.Age+'</h1><br>');
            res.write('<h1>Email'+fields.Email+'</h1><br>');
            
            var oldpath= files.uploadfile.path;
            var newpath = 'D:\beesics\training\12th_apr23\recveitem' + files.uploadfile.name;
            fs.rename(oldpath,newpath,function(){
                    
                    res.write('<h1>error occured</h1>');
                    res.write('<h1>oldpath :'+oldpath+'</h1><br>');
                    res.write('<h1>newpath :'+newpath+'</h1><br>');
            })
            
            if(err){
                console.log(err);
            }
            else{
                console.log("server at 2000")
            }
        })
    }    
}).listen(2000);

