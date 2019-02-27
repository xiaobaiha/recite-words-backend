const Koa = require('koa');
const router = require('./app/router');
const logger = require('./app/middleware/logger');
const cors = require('@koa/cors');

const app = new Koa();

// cors
app.use(cors());
// logger
app.use(logger);

// router
app.use(router.routes()); 

// error solver 
app.on('error', err => {
    console.error("error:", err);
});

app.listen(5007);