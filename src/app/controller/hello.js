const parse = require('co-body');

module.exports = async ctx => {
    let post = await parse(ctx.request);
    console.log(ctx.request.url, post);
    ctx.body = "Hello world!"
}