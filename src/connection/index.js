const mysql = require('mysql2/promise');


//require('dotenv').config();

const {
    DB_HOST,
    DB_NAME,
    DB_PORT,
    DB_PASSWORD,
    DB_USER
} = require ('../config');

const connection = mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD   
});
/*
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});*/

module.exports = connection;

