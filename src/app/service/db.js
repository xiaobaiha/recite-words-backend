const mysql = require('mysql');
const mysqlConfig = require('../../config/mysql');

const connection = mysql.createConnection(mysqlConfig);

connection.connect();

const login = (name, pwd, loginType='name') => {
    return new Promise((resolve, reject) => {
        const sql = loginType === 'name'?
            `SELECT password FROM user WHERE name="${name}"`:
            `SELECT name, password FROM user WHERE email="${name}"`;
        connection.query(sql, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                if (results && results[0]) {
                    const result = results[0].password === pwd;
                    resolve({
                        result,
                        errCode: result? 0: 1,
                        name: loginType === 'name'? name: results[0].name
                    });
                } else {
                    resolve({
                        result: false,
                        errCode: 2
                    });
                }
            }
        })
    }).catch(err => {
        console.error(err);
    }) ;
}

module.exports = {
    login
}