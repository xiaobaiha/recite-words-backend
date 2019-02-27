const Router = require('koa-router');
const hello = require('./controller/hello');
const login = require('./controller/login');
const signup = require('./controller/signup');

const router = new Router();

module.exports = router
    .post('/hello', hello)
    .post('/login', login)
    .post('/signup', signup);