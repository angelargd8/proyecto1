const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host: 'mysql',
    user: 'root',
    database: 'blog_db3',
    password: 'root_password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 3306
})

module.exports = pool
