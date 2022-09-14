const mysql = require('mysql2');
const start = require('../index.js');
const inquirer = require('inquirer');

// connect using .env variables
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Arsenal23>?',
        database: 'employee_tracker',
        rowsAsArray: true,
    },
    console.log('employee_tracker connected successfully.')
);

module.exports = db;
