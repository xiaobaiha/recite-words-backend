const mysql = require('mysql');
const mysqlConfig = require('../../config/mysql');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const selectPwdByName = (name, pwd) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT password FROM user WHERE name="${name}"`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                if (results && results[0]) {
                    resolve(results[0].password);
                } else {
                    resolve(null);
                }
            }
        })
    }).catch(err => {
        console.log(err);
    }) ;
}

const selectNameAndPwdByEmail = (email, pwd, loginType='name') => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT name, password FROM user WHERE email="${email}"`, (err, results) => {
            if (err) {
                reject(err);
            } else {
                if (results && results[0]) {
                    resolve({
                        password: results[0].password,
                        name: results[0].name
                    });
                } else {
                    resolve(null);
                }
            }
        })
    }).catch(err => {
        console.log(err);
    }) ;
}

const userExistByName = async (name) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE name="${name}"`, (err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results && !!results[0]);
        });
    }).catch(console.log);
}

const userExistByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE email="${email}"`, (err, results) => {
            if(err) {
                reject(err);
            }
            resolve(results && !!results[0]);
        });
    }).catch(console.log);
}

const insertUser = async (name, email, password) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO user (name, email, password) VALUES ("${name}", "${email}", "${password}")`, (err, results) => {
            if(err) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    }).catch(console.log);
}

module.exports = {
    selectPwdByName,
    selectNameAndPwdByEmail,
    userExistByName,
    userExistByEmail,
    insertUser
}