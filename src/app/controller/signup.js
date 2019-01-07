const parse = require('co-body');
const {login} = require('../service/db');

module.exports = async ctx => {
    const {name, password} = await parse(ctx.request);
}