module.exports.reserve = function (nm) {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Ashu@2703",
        database: "mydb"
      });
      
        var sql = 'DELETE from flight where name='+'"'+nm+'"' ;
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result);
        });
      
};


