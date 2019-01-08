const parse = require('co-body');
const {signup} = require('../service/db');

module.exports = async ctx => {
    const {name, password, email} = await parse(ctx.request);
    ctx.body = {};
}