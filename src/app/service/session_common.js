const checkSessionId = (id, session) => {
    if (session.auth) {
        return id === session.auth;
    } else {
        return false;
    }
};

const saveSession = (ctx, auth) => {
    ctx.session.auth = auth;
    ctx.cookies.set('auth', JSON.stringify(ctx.session.auth), { 
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