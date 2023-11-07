const mysql = require('mysql2/promise');


//require('dotenv').config();

const config = require('../config');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config;

const connection = mysql.createConnection({
    host: "roundhouse.proxy.rlwy.net",
    port: 41271,
    database: "railway",
    user: "root",
    password: "1h12afAdH6eGbd1A6653-cAEGdbD51Df"   
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

