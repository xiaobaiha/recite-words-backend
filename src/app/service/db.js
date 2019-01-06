const mysql = require('mysql');
const mysqlConfig = require('../../config/mysql');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const login = (name, pwd) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT ")
    });
}

