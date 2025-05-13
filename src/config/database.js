const mysql = require('mysql2/promise');
require('dotenv').config();
// Cria a conexão com o banco
const pool = mysql.createPool({

    host: "localhost",
    user: "root",
    password: "admin",
    database: "loja_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

module.exports = pool;