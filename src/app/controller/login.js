const parse = require('co-body');
const {login} = require('../service/db');

module.exports = async ctx => {
    const {name, password} = await parse(ctx.request);
    let byName = await login(name, password, 'name');
    if (byName.errCode === 2) {
        const byEmail = await login(name, password, 'email');
        if (byEmail.errCode === 0) {
            byName = byEmail;
        }
    }
    ctx.body = byName;
}