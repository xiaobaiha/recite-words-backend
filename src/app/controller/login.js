const parse = require('co-body');
const {login} = require('../service/db');

module.exports = async ctx => {
    const {name, password} = await parse(ctx.request);
    const flag = await login(name, password);
    if (flag) {
        ctx.status = 200;
        ctx.message = "Login success";
        ctx.body = {result: true};
    } else {
        ctx.status = 601;
        ctx.message = "Login failed";
        ctx.body = {result: false};
    }
}