const parse = require('co-body');

module.exports = async ctx => {
    const {name, password} = await parse(ctx.request);
    console.log({name, password});
    ctx.body = "Hello world!"
}