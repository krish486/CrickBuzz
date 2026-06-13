let express = require("express")
let morgan = require("morgan")
let env = require("./config/env")
const securityMiddleware = require("./middleware/security.middleware")



let createApp = () => {
    let app = express()

    if (env.NODE_ENV === "developement") {
        app.use(morgan("dev"))
    }

    securityMiddleware(app);

    return app
}

module.exports = createApp