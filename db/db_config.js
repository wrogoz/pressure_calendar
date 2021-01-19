var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : 'pressure_calendar'
});

module.exports = db;