const Koa = require('koa');
const router = require('./app/router');
const logger = require('./app/middleware/logger');
const cors = require('./app/middleware/cors');
const session = require('./app/middleware/session');

const app = new Koa();

app.keys = ['some secret key'];
// cors
app.use(cors);

// logger
app.use(logger);

// session
app.use(session(app));

// router
app.use(router.routes()); 

// error solver 
app.on('error', err => {
    console.error("error:", err);
});

app.listen(5007);