const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "bbgun3001",
  database: "airbnb",
});

module.exports = pool.promise();
