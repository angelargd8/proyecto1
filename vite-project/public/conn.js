import mysql from 'mysql2/promise'
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'blog_db2',
    password: 'root_password',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: 33068
})

export default pool
