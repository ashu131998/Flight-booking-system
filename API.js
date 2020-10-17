var mysql = require('mysql');
var xy = require('./insert_table');
var dt = require('./delete_table');
var sh = require('./show_table');
const { table } = require('console');
const express = require("express"); 
const app = express(); 
const bodyParser = require("body-parser") 

// Define routes here ... 
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ashu@2703',
  database: 'mydb',
  charset: 'utf8'
});
const server =app.listen(3000, function(){ 
  console.log("server is running on port 3000"); 
}) ;

app.use(bodyParser.urlencoded({ 
    extended:true
})); 

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ashu@2703",
  database: "mydb"
});
var reo ='<html><head><title>Booking information</title></head><body><h1>Booking information</h1>{${table}}</body></html>';

      var sql ='SELECT name,flight_no, source,destination,start,end,capacity FROM flight order by name';
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  app.get("/", function(req, res) { 
    res.sendFile(__dirname + "/index.html"); 
  }); 
  app.post("/", function(req, res) { 
  
    var x = Number(req.body.x); 
    if(x=='1'){
      var name=req.body.name;
      var flight_no=req.body.flight_no;
      var destination=req.body.destination;
      var source=req.body.source;
      var start=req.body.start;
      var end=req.body.end;
      var freq=req.body.freq;
      var capacity=req.body.capacity;
      xy.insert_table(name,flight_no,destination,source,start,end,freq,capacity,con);
      res.redirect('/'); 
    }
    if(x=='2'){
      var name=req.body.name;
      dt.reserve(name);
      res.redirect('/');
    }
    if(x=='3'){
      
      
      sh.show(name,app,pool,reo,sql);
      
      res.redirect('http://localhost:3000/show');
      

    }
      

});
});
