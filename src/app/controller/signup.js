const parse = require('co-body');
const {userExistByName, userExistByEmail, insertUser} = require('../service/db');

module.exports = async ctx => {
    const {name, password, email} = await parse(ctx.request);
    if (await userExistByEmail(email)) {
        ctx.body = {
            result: false,
            errCode: 1
        }
    } else if (await userExistByName(name)) {
        ctx.body = {
            result: false,
            errCode: 2
        }
    } else {
        const result = await insertUser(name, email, password);
        ctx.body = {
            result,
            errCode: result? 0: 3
        }
    }
}