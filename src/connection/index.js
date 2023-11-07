const mysql = require('mysql2/promise');


//require('dotenv').config();

const config = require('../config');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config;

const connection = mysql.createConnection({
    host: "roundhouse.proxy.rlwy.net",
    port: 47689,
    database: "railway",
    user: "root",
    password: "gH5DcCf42-Ff2gE3hAbE1h5664bFB55g",

    
    
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

