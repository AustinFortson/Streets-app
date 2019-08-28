//MYSQL Connection
// =============================================================
const mysql      = require('mysql');
port             = process.env.PORT || 3306;


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "d7f*98Ar",
    database: "streets_db",
    multipleStatements: true
});

connection.connect();

module.exports = connection;