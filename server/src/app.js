let express = require("express")
let morgan = require("morgan")
let env = require("./config/env")
const securityMiddleware = require("./middleware/security.middleware")
const googleOAuthMiddleware = require("./middleware/googleOAuth.middleware")
let authRoutes = require("./Modules/auth/auth.route")


let createApp = () => {
    let app = express()

    if (env.NODE_ENV === "developement") {
        app.use(morgan("dev"))
    }

    app.use("/api/auth", authRoutes)

    securityMiddleware(app);
    googleOAuthMiddleware(app)

    return app
}

module.exports = createApp