var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ashu@2703"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("DROP DATABASE mydb1", function (err, result) {
    if (err) throw err;
  });
   con.query("CREATE DATABASE mydb1", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});