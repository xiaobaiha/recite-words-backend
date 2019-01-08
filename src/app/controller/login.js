const parse = require('co-body');
const {selectPwdByName,selectNameAndPwdByEmail} = require('../service/db');

module.exports = async ctx => {
    const {name, password} = await parse(ctx.request);
    const byName = await selectPwdByName(name, password);
    const byEmail = await selectNameAndPwdByEmail(name, password);
    let pwd, _name;
    console.log({byName, byEmail})
    if (!byName && !byEmail) {
        ctx.body = {
            result: false,
            errCode: 2
        }
    } else {
        pwd = byName? byName: byEmail.password;
        _name = byName? name: byEmail.name;
        ctx.body = {
            result: password === pwd,
            errCode: password === pwd? 0: 1,
            name: _name
        }
    }
}