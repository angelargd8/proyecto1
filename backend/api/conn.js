const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'blog_db3',
    password: 'root_password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 33069
})

module.exports = pool
