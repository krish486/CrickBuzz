let express = require("express")
let morgan = require("morgan")
let env = require("./config/env")
const securityMiddleware = require("./middleware/security.middleware")
const googleOAuthMiddleware = require("./middleware/googleOAuth.middleware")
let authRoutes = require("../src/Modules/public/auth/auth.route")
const ErrorHandler = require("./middleware/errorHandler.middleware")
const notFound = require("./middleware/notFound.middleware")


let createApp = () => {
    let app = express()


    if (env.NODE_ENV === "developement") {
        app.use(morgan("dev"))
    }
    securityMiddleware(app);
    googleOAuthMiddleware(app)

    app.use("/api/auth", authRoutes)

    app.use(notFound)
    app.use(ErrorHandler)

    return app
}

module.exports = createApp