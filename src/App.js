const Koa = require('koa');
const route = require('koa-route');
const parse = require('co-body');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
app.use(route.post('/hello', async ctx => {
    let post = await parse(ctx.request);
    console.log(ctx.request.url, post);
    ctx.body = "Hello world!"
})); 

// error solver 
app.on('error', err => {
    console.error("error:", err);
})
app.listen(5007);