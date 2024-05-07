-- Create the database
CREATE DATABASE IF NOT EXISTS blog_db3;
USE blog_db3;

-- Create a user and grant privileges
CREATE USER IF NOT EXISTS 'blog_user'@'%' IDENTIFIED BY 'blog_password';
GRANT ALL PRIVILEGES ON blog_db3.* TO 'blog_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    descripcion TEXT NOT NULL, 
    imagen MEDIUMTEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS funciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    funcion VARCHAR(255) NOT NULL,
    informacion TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(255) PRIMARY KEY,
    password MEDIUMTEXT NOT NULL,
    rol VARCHAR(255) NOT NULL
);
INSERT INTO users (username, password, rol) VALUES ('angel', '123', 'admin');