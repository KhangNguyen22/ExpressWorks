var express = require("express");
var app = express();
var fs = require('fs');

app.get('/books',function(req,res){
    fs.readFile(process.argv[3], function(err,data) {
        if (err) {
            console.log(err);
        }
        var object = JSON.parse(data.toString());
        res.send(JSON.stringify(object));
    });
});


app.listen(process.argv[2]);