const checkSessionId = ctx => {
    console.log(ctx.cookies.get('auth'), ctx.session.auth)
    if (ctx.session.auth) {
        return ctx.cookies.get('auth') === ctx.session.auth;
    } else {
        return false;
    }
};

const saveSession = (ctx, auth) => {
    ctx.session.auth = auth;
    ctx.cookies.set('auth', ctx.session.auth, { 
        path: '/',
        maxAge: 10 * 60 * 1000,
        httpOnly: false,
        overwrite: false
    });
}

module.exports = {
    checkSessionId,
    saveSession
};