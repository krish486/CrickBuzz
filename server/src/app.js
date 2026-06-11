let express = require("express")
let morgan = require("morgan")
let env = require("./config/env")

let createApp = () => {
    let app = express()

    if (env.NODE_ENV === "developement") {
        app.use(morgan("dev"))
    }

    return app
}

module.exports = createApp