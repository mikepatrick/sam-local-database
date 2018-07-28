'use strict';
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '192.168.1.6',
  user     : 'mike',
  password : 'password',
  database : 'logtest'
});

module.exports.hello = (event, context, callback) => {
  
  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        solution: results[0].solution,
      }),
    };

    connection.end();

    callback(null, response);    
  });
};
