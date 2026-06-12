let express = require("express")
let morgan = require("morgan")
let env = require("./config/env")
let hpp = require("hpp")
let helmet = require("helmet")
let compression = require("compression")
let cors = require("cors")


let createApp = () => {
    let app = express()

    app.use(cors({
        origin: env.CORS_ORIGIN,
        credentials: true
    }))

    app.use(helmet)
    app.use(hpp)
    app.use(compression)

    app.use(express.json({ limit: "3mb" }))
    app.use(express.urlencoded({ extended: true, limit: "3mb" }))

    if (env.NODE_ENV === "developement") {
        app.use(morgan("dev"))
    }

    return app
}

module.exports = createApp