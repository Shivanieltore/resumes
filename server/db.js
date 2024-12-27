// db.js
const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',           // MySQL server hostname
  user: 'root',                // Your MySQL username (default is 'root')
  password: 'Shivani10',       // Your MySQL password
  database: 'profileperfect',  // The database you're connecting to
  connectionLimit: 10          // Optional: Adjust based on expected traffic
});

module.exports = pool;
