const mysql = require('mysql');
const mysqlConfig = require('../../config/mysql');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const login = (name, pwd) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT password FROM user WHERE name="${name}"`, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0].password === pwd)
            }
        })
    }).catch(err => {
        console.error(err);
    }) ;
}

module.exports = {
    login
}