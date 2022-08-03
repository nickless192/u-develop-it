const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        // mysql password
        password: 'Mamipapi_2602!',
        database: 'election'
    }
);

module.exports = db;