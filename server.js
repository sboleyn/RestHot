var express = require("express");
var path = require("path");

var app = express();

var PORT = 9001;




app.listen(PORT, function(){
    console.log("Hey this is running on a port formerly known as PORT: " + PORT)
});