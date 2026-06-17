module.exports = {
    PORT: 4000,
    MONGO_URL: "mongodb://0.0.0.0/crickbuzz",
    LOGGER_LEVEL: "info",
    NODE_ENV: "developement",
    cookie: {
        accessConfig: {
            httpOnly: false,
            secure: false,
            sameSite: "lax",
            maxAge: 60 * 60 * 1000,
        },
        refreshConfig: {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000,
        }
    }
}