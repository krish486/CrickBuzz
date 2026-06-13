let hpp = require("hpp")
let helmet = require("helmet")
let compression = require("compression")
let cors = require("cors")
let rateLimit = require("express-rate-limit")
let express = require("express")


let securityMiddleware = (app) => {
    app.use(helmet)

    app.use(cors({
        origin: env.CORS_ORIGIN,
        credentials: true
    }))

    //ek particular ip address se 100 request aayegi in 15 mins
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        legacyHeaders: true,
        message: "to many request thode samay baad try karo"
    }))

    app.use(hpp)
    app.use(compression)

    app.use(express.json({ limit: "3mb" }))
    app.use(express.urlencoded({ extended: true, limit: "3mb" }))

}

module.exports = securityMiddleware