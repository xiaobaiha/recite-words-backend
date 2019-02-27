const parse = require('co-body');
const {selectPwdByName,selectNameAndPwdByEmail} = require('../service/db');
const { checkSessionId, saveSession } = require('../service/session_common');

module.exports = async ctx => {
    const {email, password} = JSON.parse(await parse(ctx.request));
    const byName = await selectPwdByName(email, password);
    const byEmail = await selectNameAndPwdByEmail(email, password);
    let pwd, _name;
    const alreadyLogin = checkSessionId(ctx.cookies.get('auth'), ctx.session);

    if (alreadyLogin) {
        ctx.body = {
            result: false,
            errCode: -1
        }
    } else if (!byName && !byEmail) {
        ctx.body = {
            result: false,
            errCode: 1036
        }
    } else {
        pwd = byName? byName: byEmail.password;
        _name = byName? email: byEmail.name;
        if (password === pwd) {
            saveSession(ctx, email);
        }
        ctx.body = {
            result: password === pwd,
            errCode: password === pwd? 200: 1035,
            name: _name,
            setting: password === pwd? 0: undefined,
        }
    }
}