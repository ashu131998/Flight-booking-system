module.exports.insert_table = function (nm,fn,ds,sr,s,e,f,cap,con) {
    var mysql = require('mysql');
        var sql = 'INSERT INTO flight (name,flight_no , destination , source ,start ,end ,freq,capacity) VALUES ('+'"'+nm+'"'+','+'"' +fn+'"'+','+'"'+ds+'"'+','+'"'+sr+'"'+','+'"'+s+'"'+','+'"'+ e +'"'+','+'"'+f +'"'+','+'"'+cap+'"'+')';
        
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log('Entry Inserted!');
        });
};