const Router = require('koa-router');
const hello = require('./controller/hello');
const login = require('./controller/login');

const router = new Router();
module.exports = router
    .post('/hello', hello)
    .post('/api/login', login);