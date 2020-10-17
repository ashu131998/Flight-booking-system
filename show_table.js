module.exports.show = function (nm,app,pool) {

const http = require('http');
const mysql = require('mysql');
const express = require('express')



//html string that will be send to browser
var reo ='<html><head><title>Booking information</title></head><body><h1>Booking information</h1>{${table}}</body></html>';

function setResHtml(sql, cb){
  pool.getConnection((err, con)=>{
    if(err) throw err;
    con.query(sql, (err, res, cols)=>{
      if(err) throw err;
      
      var table =''; //to store html table
      
      for(var i=0; i<res.length; i++){
        table +='<tr><td>'+ (i+1) +'</td><td>'+ res[i].name +'</td><td>'+ res[i].flight_no +'</td><td>'+ res[i].source +'</td><td>'+res[i].destination +'</td><td>'+res[i].start +'</td><td>'+res[i].end +'</td><td>'+res[i].capacity +'</td></tr>';
      }
      table ='<table border="1"><tr><th>Nr.</th><th>Name</th><th>Flight_no</th><th>Source</th><th>Destination</th><th>Start</th><th>End</th><th>Capacity</th></tr>'+ table +'</table>';

      return cb(table);
    });
  });
}

let sql ='SELECT name,flight_no, source,destination,start,end,capacity FROM flight where name='+'"'+nm+'"';

app.get('/show',(req, res)=>{
  
  setResHtml(sql, resql=>{
    
    reo = reo.replace('{${table}}', resql);
    res.write(reo, 'utf-8');
    reo = reo.replace( resql,'{${table}}');
    res.end();
  });
});



};