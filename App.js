const Koa = require('koa');
const app = new Koa();

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
app.use(async ctx => {
    console.log(ctx.request.url);
    ctx.body = "Hello world!"
}); 

// error solver 
app.on('error', err => {
    
})
app.listen(5007);