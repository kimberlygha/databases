var Promise = require('bluebird');
var mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'chat'
});

module.exports.esc = function(string) {
  return mysql.escape(string);
}


// needs to take a query and data
module.exports.asyncMySQL = function(query, data){
  data = data || [];
  return new Promise(function(resolve, reject){
    // query call
    // pass in queryString and data
    module.exports.connection.query(query, data, function(err, rows, fields){
      // in the callback
      if (err) {
        // if there is an err, we pass reject the err
        reject(err);
      } else {
        // if not then we pass the rows to resolve
        resolve(rows, fields);
      }
    });
  });
}








