var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var PORT = 9001;

var tables = [{ 
    id: "fish",
    name: "David",
    email: "foo@foo.com",
    phone: "1234567891"
},
{
    id: "fish2",
    name: "David",
    email: "foo@foo.com",
    phone: "1234567891"
}];
var waitlist = [{
    id: "fish3",
    name: "David",
    email: "foo@foo.com",
    phone: "1234567891"
}];

//
// Table API
//
app.get("/api/tables", function(req, res){
    return res.json(tables);
})

//
// Waitlist API
//
app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
})


//
// Home Route
//
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/home.html"));
})

//
// Make Route
//
app.get("/make", function(req,res){
    res.sendFile(path.join(__dirname, "/make.html"));
})

//
// View Route
//
app.get("/view", function(req,res){
    res.sendFile(path.join(__dirname, "/view.html"));
})

//
// Make new Table
//
app.post("/make", function(req, res){
    var table = req.body;
    console.log(table);
    tables.push(table);
    console.log(tables);
    res.send("OK");
})





app.listen(PORT, function () {
    console.log("Hey this is running on a port formerly known as PORT: " + PORT)
});