const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Lab 17',
    password: 'Gdrv161203?',
});
module.exports = pool.promise();