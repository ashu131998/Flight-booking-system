var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ashu@2703",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
con.query("DROP TABLE flight", function (err, result) {
    if (err) throw err;
  });  

con.query("CREATE TABLE flight (name VARCHAR(255),flight_no VARCHAR(255), destination VARCHAR(255), source VARCHAR(255),start DATETIME,end DATETIME, freq INT,capacity INT)", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});