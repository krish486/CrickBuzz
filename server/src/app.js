let express = require("express")
let morgan = require("morgan")
let env = require("./config/env")

let createApp = () => {
    let app = express()

    app.use(express.json({ limit: "3mb" }))
    app.use(express.urlencoded({ extended: true, limit: "3mb" }))

    if (env.NODE_ENV === "developement") {
        app.use(morgan("dev"))
    }

    return app
}

module.exports = createApp