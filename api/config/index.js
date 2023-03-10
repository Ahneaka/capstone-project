require('dotenv').config();

const { createPool } = require('mysql');

let connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPass,
    port: process.env.dbPort,
    multipleStatements: true
})

module.exports = connection; 